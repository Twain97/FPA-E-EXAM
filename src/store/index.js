import { createStore } from "vuex";
import { createUserWithEmailAndPassword, getAuth, updateProfile,
    signInWithEmailAndPassword, signInAnonymously
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import router from "../router/index.js";
import { db } from "../firebase/firebase.js";
import { doc, setDoc, getDoc, updateDoc, Firestore} from "firebase/firestore";



const store = createStore({
    state: {
        user:null,
        correctAnswer:0,
        userAnswer:[],
        overallScore:0,
        questions:[
            {
                
                questionDetails:{
                    name:"Question1",
                    question:"Add 1 + 1 =",
                    options:["(A) 20", "(B) 0", "(C) 2", "(D) 15"],
                    answer:"(C) 2"
                },
            },
            {
                
                questionDetails:{
                    name:"Question2",
                    question:"What is your supervisor name?",
                    options:["(A) Mrs Abiodun", "(B) A.O Ajao", "(C) Dr. Fele", "(D) Ms Ogunji"],
                    answer:"(A) Mrs Abiodun"
                },
                
            },
            {
                
                questionDetails:{
                    name:"Question3",
                    question:"What goes up and doesn't come down?",
                    options:["(A) Ball", "(B) Age", "(C) Naira", "(D) Plane"],
                    answer:"(B) Age"  
                },
                
            },
            {
                
                questionDetails:{
                    name:"Question4",
                    question:"What is the opposite of the light?",
                    options:["(A) Indigo", "(B) Yellow", "(C) Brown", "(D) Dark"],
                    answer:"(D) Dark"
                },
                
            },
            {
                
                questionDetails:{
                    name:"Question5",
                    question:"Which is the smallest?",
                    options:["(A) Atom", "(B) Molecule", "(C) Droplet", "(D) Stream"],
                    answer:"(A) Atom"
                },
                
            },
        ]
    },
    mutations:{
        setUser(state, payload){
            state.user = payload;
        },
        clearUser(state){
            state.user = null;
        },
        calculateAnswers(state, payload){


            state.userAnswer = payload
            // loop through user answer and compare them with 
            // the correct answer in each question answer
            console.log(state.userAnswer)
            for (let i = 0; i < state.questions.length; i++){
                if(state.userAnswer[i] == state.questions[i].questionDetails.answer){
                    state.correctAnswer ++;
                    
                }
            }
            console.log('correct answer:' + state.correctAnswer)
            state.overallScore = (state.correctAnswer / state.questions.length) * 100;
            console.log(state.overallScore + " / 100")

            state.userAnswer = [];
            state.correctAnswer = 0;
        }
    },
    actions:{
        async submitQuiz({commit, state}, payload){
            commit("calculateAnswers", payload);

            if(state.user==null){ // check if user is logged in anonymously
                // log anon user name from the local storage
                console.log("Anon user = " + localStorage.getItem('user'))
                const docRef = doc(db, "users", localStorage.getItem('user'));
                // check if the anon user has data in Firestore
                await getDoc(docRef).then((result)=>{
                    if(result.exists()){
            
                        console.log("Anon user has data in Firebase")
                        console.log("User current score :" + result.data().score)
                        // update the user score in firestore
                        updateDoc(docRef, {
                            score: state.overallScore
                        })
                    }
                })
                // log the new score recorded in firestore
                await getDoc(docRef).then((result)=>{
                    if(result.exists()){
                        console.log("Updated score: " + result.data().score)
                    }else{
                        console.log("No data")
                    }
                })
            }
            else if(state.user!=null){ // if there is a known user logged in
                console.log("currently logged in user = " + state.user)

                const docRef = doc(db, "users", state.user);
                // check if user has record in the firesstore
                await getDoc(docRef).then((result)=>{
                    if(result.exists()){
                        console.log("User has data in Firebase")
                        console.log("User current score :" + result.data().score)
                        // update the user score
                        updateDoc(docRef, {
                            score: state.overallScore
                        })
                    }else{
                        console.log("No data")
                    }
                })

                // log the new recorded score

                await getDoc(docRef).then((result)=>{
                    if(result.exists()){
                        console.log("Updated score: " + result.data().score)
                    }else{
                        console.log("No data")
                    }
                })
            }

           
        },


        async anonSignin({commit}, payload){

            try{
                await signInAnonymously(auth);
                commit('setUser', payload);

                // store the user name in local storage so that the name can be fetch with each reload
                localStorage.setItem('user', payload);
                console.log(localStorage.getItem('user'))
                
                router.push('/home')
            }catch(error){
                console.log(error)
            }
        },
        async AdminLogin({commit}, payload){

            const {email, password} = payload;

            try{
                await signInWithEmailAndPassword(auth, email, password);
            }catch(error){
                console.log(error)
            }
            commit('setUser', auth.currentUser.displayName);
            router.push('/admin')
        }, 
        async login({commit}, details){
            const { email, password } = details;

            try{

                await signInWithEmailAndPassword(auth, email, password);

            }catch(error){
                switch(error.code){
                    case 'auth/invalid-email':
                        alert('Invalid email')
                        break;
                    case 'auth/user-disabled':
                        alert('User disabled')
                        break;
                    case 'auth/user-not-found':
                        alert('User not found')
                        break;
                    case 'auth/wrong-password':
                        alert('Wrong password')
                        break;
                    case 'auth/missing-password':
                        alert('Missing password')
                        break;
                    case 'auth/missing-email':
                        alert('Missing email')
                        break;
                    case 'auth/invalid-password':
                        alert('Invalid password')
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Operation not allowed')
                        break;
                    case 'auth/network-request-failed':
                        alert('Network request failed')
                        break;
                    case 'auth/too-many-requests':
                        alert('Too many requests')
                        break;
                    default:
                        alert('Something went wrong')
                        break;
                }
                return;
            }
            console.log(auth.currentUser)
            const docRef = doc(db, "users", auth.currentUser.displayName);
            await getDoc(docRef).then((result)=>{
                if(result.exists()){
                    const verify = result.data().verification
                    if(verify == "Unverified"){
                        alert("Face not yet captured")
                        
                        const vib = ()=>{
                            navigator.vibrate([100, 50, 100])
                        }

                        vib();

                        commit('clearUser');
                        auth.signOut(auth);
                    }else{
                        commit('setUser', auth.currentUser.displayName) // authenticate the user
                        router.push('/home')
                    }
                }
            });
            


           
        },

        async register({commit}, details){
            const {email, password, name, matric, age, department, level, gender} =details

            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(error){
                switch(error.code){
                    case 'auth/email-already-in-use':
                        alert('Email already in use')
                        break;
                    case 'auth/invalid-email':
                        alert('Invalid email')
                        break;
                    case 'auth/weak-password':
                        alert('Weak password')
                        break;
                    case 'auth/missing-password':
                        alert('Missing password')
                        break;
                    case 'auth/missing-email':
                        alert('Missing email')
                        break;
                    case 'auth/invalid-password':
                        alert('Invalid password')
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Operation not allowed')
                        break;
                    case 'auth/network-request-failed':
                        alert('Network request failed')
                        break;
                    case 'auth/too-many-requests':
                        alert('Too many requests')
                        break;
                    default:
                        alert('Something went wrong')
                        break;
                }
                return;
            }
            commit('setUser', auth.currentUser.displayName) // authenticate the new user

            router.push('/confirmSignup');

            // update the new user information
            const crntUser = getAuth().currentUser;
            updateProfile(crntUser, {
                displayName: name,
                matricNumber: matric,
                verification: "Unverified",
                age:age,
                score:0,
                department:department,
                level:level,
                gender:gender
            }).then(()=>{
                console.log("User created successfully");
            }).catch((error)=>{
                console.log(error)
            })
            
            // create user firestore database
            setDoc(doc(db, "users", name),
        {
            email:email,
            name:name,
            matric:matric,
            age:age, 
            verification: "Unverified",
            score:0,
            department:department, 
            level:level, 
            gender:gender

        }, { merge:true})

    },

    async logOut({commit}){
        commit('clearUser');
        // remove user from local storage
        localStorage.removeItem('user');
        console.log(localStorage)
        await auth.signOut(auth);
        router.push('/')
    },

    //fetch current user

    fetchUser({commit}){
         // this is check to see if the user is logged in everytime theres a refresh
        // and prevent the user from being directed to log in page on every reload

        auth.onAuthStateChanged(
            async user =>{
                // check if user is online or not
                if(user == null){
                    // if user is empty
                    // commit('clearUser');
                    router.push(router.currentRoute)
                }else{
                    // if user is not empty
                    commit('setUser', auth.currentUser.displayName);
                    if(router.isReady() && router.currentRoute.value.path == '/'){
                        router.push('/home')
                    }
                }
                // return user.displayName;
            }
        )
    }
}
})

export default store;