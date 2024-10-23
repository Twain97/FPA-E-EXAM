<template>
    <Transition name="slide-fade" >
        <div v-show="showPage" class="fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800">
        
            <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
                <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
                <font-awesome-icon icon="fa-solid fa-x"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />
  
            </div>
        
            <div class="flex flex-col h-5/6  rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm">
               
                <div class="flex z-50 my-auto  md:py-2 w-full h-full ">
                    <div class="m-auto border-blue-400 flex-col py-10 px-4 space-y-10 md:space-y-5">
                        <div id="webcam-container" class="rounded-full w-fit h-fit -scroll-my-10 mx-auto overflow-hidden border-2 border-purple-700"></div>
                        <div class="flex w-full space-x-5 mx-auto">
                            <div id="label-container" class="rounded-xl text-sm md:text-base">Please wait while the system load...</div>
                            <!-- <button v-if="stopButton" type="button" @click="stopVid()" class="rounded-lg px-4 py-0 shadow-md border-4 border-purple-900 bg-slate-200 text-sm md:text-base font-semibold">Stop Camera</button>
                            <button v-else type="button" @click="startVid()" class="rounded-lg px-4 py-0 shadow-md border-4 border-purple-900 bg-slate-200 text-sm md:text-base font-semibold">Start Camera</button> -->
                        </div>
                    </div>
                </div>
                <div class="mx-auto text-center space-y-3">
                    <p>Wrong Face detected?</p>
                    <p><router-link to="/manualLogin" @click="stopVid()" class="bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Manual LogIn</router-link> </p>   
                </div>
                <div class="w-full flex justify-evenly md:justify-between mt-10 text-sm font-normal md:font-semibold border-red-500 md:mx-auto md:w-3/4">
                    <p class="text-center my-auto">New to the system? Proceed to </p>
                    <router-link to="/Signup" @click="stopVid()" class=" bg-purple-900 text-slate-200 my-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Sign Up</router-link>
                </div>
            </div>
            
            
        </div>
  </Transition>
</template>
<script>
import router from '@/router';
import { db,} from '@/firebase/firebase';
import { getDoc, doc  } from 'firebase/firestore';
import { useStore } from 'vuex';
const network = navigator.onLine;
const URL = "https://teachablemachine.withgoogle.com/models/vkbx0yK3Q/";
let running = true // to control the activity of the model&webcam loop
let model, webcam, labelContainer, maxPredictions, prediction;
export default{
    data(){
        return{
            showPage:true,
            startButton:false,
            stopButton:true
        }
    },
    beforeMounted(){
        window.addEventListener('load', () =>{
            if(!network){
                alert('No network detected \n Please connect to a network and reload the page')
            }
        })
    },
    mounted(){
        running = true
        const store = useStore();
        async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(144, 144, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div.rounded-xl border-4 border-blue-500"));
        }
    }

    async function loop() {
        if(running){
            webcam.update(); // update the webcam frame
            if(network){
                await predict();
                window.requestAnimationFrame(loop);
            }else{
                webcam.stop();
                alert('Error! No Network Detected!')
            }
        }
        
    }

    // run the webcam image through the image model
    async function predict() {
                // predict can take in an image, video or canvas html element
        prediction = await model.predict(webcam.canvas);
        console.log(prediction)
        for (let i = 0; i < maxPredictions; i++) {
            if(prediction[i].probability.toFixed(2) == 1.00){
                const classPrediction = `Detected ${prediction[i].className}'s Face ${prediction[i].probability.toFixed(2) * 100}%`;
                labelContainer.innerHTML = `<P class="underline"> ${classPrediction}</p>`;


                    // check if the name exist in fireStore
                const docRef = doc(db, "users", prediction[i].className);
                await getDoc(docRef).then((result)=>{
                    if(result.exists()){
                        console.log('User Exist');
                        // check if the detected user is correct with the user in the database
                        // Get the matric number from the database
                        const matric = result.data().matric;
                        const matricNumber = matric.split('-')[4];
                        // prompt to confirm to take user provided matric number
                        const confirmMatric = prompt(`Detected ${result.data().name}. \n \n Enter the last 4 digits of your matric number to login`, "0123")

                        if(confirmMatric == matricNumber){ // compare if the matric number is correct

                            // check if user is verified
                            
                            if(result.data().verification == 'verified'){
                                // sign in user anonymously
                                store.dispatch('anonSignin', result.data().name);
                                // stop te model from continue running
                                running = false;
                                // stop the webcam
                                webcam.stop();
                            }else{
                                // stop te model from continue running
                                running = false;
                                // stop the webcam
                                webcam.stop();
                                alert("User not verified! Contact Admin.")
                                router.push('/')
                            }
                            
                        }else{
                            // // stop te model from continue running
                            running = false;
                                // stop the webcam
                            webcam.stop();
                            alert("Wrong User detected!")
                            router.push('/')
                        }
                        
                    }else{
                        
                        console.log('Name does not exist')
                    }
                }); 
            }
           
        }
    }

       init();
    },

    methods:{
        toggleShowProductPage(){
            webcam.stop();
            running=false
            router.push('/');
        },
        stopVid(){
            webcam.stop();
            running = false;
            this.startButton = true;
            this.stopButton = false;
        },
        
    },

}

</script>