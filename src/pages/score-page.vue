<template>
  <div class="w-full h-full absolute flex flex-col">
    <header-component></header-component>
          <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm">
             
                <div class="flex z-50 my-auto  md:py-2 w-full h-full ">
                <div class="w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10">
                  <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 my-auto  mx-auto">

                  <div class="w-full   space-y-2 flex flex-col ">
                  <h2 class="text-slate-800 mx-auto font-bold text-lg md:text-2xl">Welcome {{ userName }}</h2>
                  
                  <h4 class="text-slate-800 font-bold text-xs md:text-lg text-center">Your Total Score is: <span class=" bg-purple-900 text-slate-200 px-2 py-1 rounded-lg transition-all shadow-lg"> {{ score }}</span></h4>
                  
                  </div>
                  

                  <div class="w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4">
                   <router-link to="/home" class=" bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg">Go Back</router-link>
                  </div>
            </div>
          </div>
          </div>
        </div>
</template>
<script>
import headerComponent from '@/views/header.vue'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/firebase'
export default{
  components:{
    headerComponent
  },
  data(){
    return{
      userName : '',
      score :'No score yet.'
    }
  },
  beforeMount(){
   this.fetchData()
  },
  methods:{
    async fetchData(){
        if(this.$store.state.user == null){
          this.userName = localStorage.getItem('user')

          // check if anon user has data in firestore
          const docRef = doc(db, 'users', this.userName);
          await getDoc(docRef).then((result)=>{
            if(result.exists()){
              this.score = result.data().score
            }else{
              this.score = 'No score yet. Take Exam.'
            }
          })
        }else{
          this.userName = this.$store.state.user;

          // check if anon user has data in firestore
          const docRef = doc(db, 'users', this.userName);
          await getDoc(docRef).then((result)=>{
            if(result.exists()){
              this.score = result.data().score
            }else{
              this.score = 'No score yet. Go back and take the test.'
            }
          })
        }
      }
  }
}
</script>

<style>

</style>
