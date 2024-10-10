<template>
  <div class="w-full h-full absolute flex flex-col border-red-500">
    <header-component></header-component>
          <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm">
             
                <div class="flex z-50 my-auto  md:py-2 w-full h-full ">
                <div class="w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10">
                  <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 my-auto  mx-auto">

                  <div class="w-full   space-y-2 flex flex-col ">
                  <h2 class="text-slate-800 mx-auto font-bold text-lg md:text-2xl">Welcome {{ userName }}</h2>
                  <h4 class="text-slate-800 font-bold text-xs md:text-lg text-center">Choose an option below to take the exam or check you score.</h4>
                  
                  </div>
                  <div class="w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4">
                    <router-link to="/examPage" class=" bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Start Exam</router-link>
                    <router-link to="/scorePage" class=" bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Check Score</router-link>
                  </div>
            </div>
          </div>
          </div>
        </div>
</template>
<script>
import headerComponent from '@/views/header.vue'
import {auth} from '@/firebase/firebase'
import router from '@/router';

export default{
  components:{
    headerComponent
  },
  data(){
    return{
      userName :''
    }
  },
  mounted(){
    auth.onAuthStateChanged((user)=>{
        if(user){
          //  check if the state store has a user name or not
          if(this.$store.state.user == null){
            this.userName = localStorage.getItem('user')
          }else{
            if(this.$store.state.user == 'admin'){
              router.push('/admin')
            }else{
              this.userName = this.$store.state.user
            }
          }
        }
      })
  }
}
</script>

<style>

</style>
