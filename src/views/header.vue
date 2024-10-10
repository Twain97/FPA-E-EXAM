<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-between text-xs mt-2 font-semibold bg-slate-200  border-red-500 px-1 md:px-4 md:w-wd8 md:mx-auto md:py-2 md:text-base  rounded-lg">
   <div class="flex justify-between py-2 w-full text-center h-fit  border-blue-500 my-auto">
     <p class="bg-purple-500 rounded-lg p-2  md:px-4 mx-1 shadow-lg">User:  <span class="font-bold">{{ userName }}</span>.</p>
     <p class="bg-purple-500 rounded-lg p-2  md:px-4 mx-1 shadow-lg cursor-pointer" @click="logout()"> Logout</p>
   </div>
 </div>  
</template>

<script>
import { auth } from '@/firebase/firebase';
import { useStore } from 'vuex';

export default {
  data(){
    return{
      userName:'waiting...'
    }
  },
  beforeMount(){
    
      this.fetchUserName();
  },
  methods: { 

    logout(){
      this.$store.dispatch('logOut')
    },

    fetchUserName(){

      const store = useStore()

      auth.onAuthStateChanged((user)=>{
        if(user){
          //  check if the state store has a user name or not
          if(store.state.user == null){
            this.userName = localStorage.getItem('user')
          }else{
            this.userName = store.state.user
          }
        }
      })
    }
  }
}
</script>

<style>

</style>