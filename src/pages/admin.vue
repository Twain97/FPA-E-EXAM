<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-fit absolute flex flex-col">
    <header-component></header-component>
          <div class="flex flex-col h-fit rounded-xl my-5 mx-auto pb-2 w-fit md:w-wd7 lg:w-wd8 xl:w-wd45 bg-slate-100 shadow-sm">
             
                <div class="flex z-50 my-auto  md:py-2 w-full h-full border-blue-500">
                <div class="w-full h-full py-2 flex flex-col px-2 border-red-500 mx-auto space-y-10">
                  <div class="w-full   space-y-2 flex flex-col ">
                  <h2 class="text-slate-800 mx-auto font-bold text-lg md:text-2xl uppercase">Admin Page.</h2>

                  <table class="">
                    <tr class="border-black rounded-t-xl border-2 md:border-4 font-bold text-center text-sm md:text-lg uppercase">
                      <td>Name</td>
                      <td>Email</td>
                      <td>Matric Number</td>
                      <td>Department</td>
                      <td>Level</td>
                      <td>Score</td>
                      <td>Verification</td>
                    </tr>
                    <tr v-for="document in documents" :key="document.id" class="border-blue-500 border-2 md:border-4 text-xs md:text-base  ">
                      <td class="border-black border-2 md:border-4 w-fit uppercase py-2">{{ document.data.name }}</td>
                      <td class="border-black border-2 md:border-4 w-fit lowercase">{{ document.data.email }}</td>
                      <td class="border-black border-2 md:border-4 w-fit uppercase">{{ document.data.matric }}</td>
                      <td class="border-black border-2 md:border-4 w-fit uppercase">{{ document.data.department }}</td>
                      <td class="border-black border-2 md:border-4 w-fit uppercase">{{ document.data.level }}</td>
                      <td class="border-black border-2 md:border-4 w-fit uppercase">{{ document.data.score }}</td>
                      <td class="border-black border-2 md:border-4 w-fit uppercase">{{ document.data.verification }}</td>
                    </tr>
                  </table>
                  
                  </div>
                  
                  <div class="flex flex-col space-y-3">
                    <h4 class="text-slate-800 font-bold text-base md:text-lg text-center uppercase">User Verification.</h4>
                    <div class=" border-blue-500 flex w-full md:w-3/4 mx-auto ">
                      <div class="flex flex-col border-black w-full mx-5">
                        <label for="userName" class="text-base font-bold md:text-lg md:font-bold">User Name:</label>
                        <select name="userName" id="username" v-model="userName" >

                          <option :value="document.data.name" v-for="document in documents" :key="document.id" 
                          class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400">
                            {{ document.data.name }}
                          </option>
                        </select>
                      </div>

                      <div class="flex flex-col  border-black w-full ">
                        <label for="verification" class="text-base font-bold md:text-lg md:font-bold">Verification Status:</label>
                        <select name="verification" id="verification" v-model="verification" >

                          <option value="verified" 
                          class="bg-inherit indent-1 font-semibold border-b-2 border-slate-400">
                            verified
                          </option>
                          
                          <option value="Unverified" 
                          class="bg-inherit indent-1 font-semibold border-b-2 border-slate-400">
                            Unverified
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class="w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4">
                   <button @click="updateUser()" class=" bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg">Submit Verification.</button>
                  </div>
            </div>
          </div>
          </div>
        </div>
</template>
<script>
import headerComponent from '@/views/header.vue'
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase'
import { useRoute } from 'vue-router';
import router from '@/router';
export default{
  components:{
    headerComponent
  },
  data(){
    return{
      userName : '',
      score :'No score yet. Go back and take the test.',
      documents:[],
      verification:''
    }
  },
  mounted(){
  //  this.fetchData();
    this.getRoute()
   
  },
  methods:{
    async updateUser(){
      if(this.userName != '' && this.verification != ''){
        const docRef = doc(db, 'users', this.userName);
        await getDoc(docRef).then((result)=>{
          if(result.exists()){
            // console.log('user Data = ' + result.data().email)

            updateDoc(docRef, {
              verification: this.verification,
            }).then(()=>{
              this.userName = ''
            this.verification =''

            alert('User Verification Status Updated.')
            window.location.reload()
            }).catch((error)=>{
              console.log(error)
            })
            
          }
          
        })

      }else{
        alert('Please select the user and verification status.')
      }
      

    },


    getRoute(){
      const route = useRoute()
      console.log(route.name)

      if(this.$store.state.user != 'admin' && route.name == 'admin'){
        console.log('authenticate user not admin')
        router.push('/home')
      }else if(localStorage.getItem('user') && route.name == 'admin'){
        console.log('local storage user not admin')
        router.push('/home')  
      }else{
        this.fetchData()
      }       
    },
    async fetchData(){
        try{
          const querySnapshot = await getDocs(collection(db, 'users'));

          querySnapshot.forEach((doc) => {
            this.documents.push({
              id: doc.id,
              data: doc.data()
            })
          });

          console.log(this.documents)
        }catch(error){
          console.log(error)
        }
      }
  }
}
</script>

<style>

</style>
