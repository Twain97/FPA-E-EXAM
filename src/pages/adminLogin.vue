<template>
  <Transition name="slide-fade" >
      <div v-show="showPage" class="fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800">
      
          <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
              <font-awesome-icon icon="fa-solid fa-x"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />

          </div>
      
          <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm">
             
                <div class="flex z-50 my-auto  md:py-2 w-full h-full ">
                <div class="w-full h-fit py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
                  <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto">

                  <div class="w-full h-full  space-y-2 flex flex-col  md:space-y-3 ">
                  <h2 class="text-slate-800 mx-auto font-bold text-lg">Admin Login.</h2>
                  <h4 class="text-slate-800 font-bold text-xs text-center">Provide your details below to as Admin to Login.</h4>
                  
                  <form name="emailAndPassword" @submit.prevent="login()"
                    class="flex flex-col space-y-3 ">
                    <div class="flex flex-col space-y-3 md:flex-col text-xs md:text-sm" >
                     
                      <label for="Email"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Enter Email Address:</label>
                      <input name="Email" type="email" v-model.trim.lazy="registerForm.email" placeholder="Admin@gmail.com"
                      class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
                      <label for="password"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Enter Password:</label>
                      <div class="bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400">
                        <input id="password" type="password" v-model.trim.lazy="registerForm.password"
                        class="bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold "/>
                        <font-awesome-icon v-if="showEye" icon="fa-solid fa-eye" @click="(showPassword(), eyes())" 
                        class="p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400" />
                        <font-awesome-icon v-else icon="fa-solid fa-eye-slash" @click="(showPassword(), eyes())" 
                        class="p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400" />

                      </div>
                    </div>
                    <input type="submit" value="Login" class="bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg" />
                    </form>
                  </div>
                 
            </div>
          </div>
          </div>
      </div>
</Transition>
</template>
<script>
import{ref} from 'vue';
import router from '@/router';
import { useStore } from 'vuex';

export default{
   data(){
    return{
      showEye:true,
    }
   },
   methods: {
      eyes(){
        this.showEye = !this.showEye
      }
    },

  setup(){
    let showPage = true;
    const store = useStore(); 
    const registerForm = ref({});

    let showPassword = () =>{
    const toggle = document.getElementById("password")
      if(toggle.type === "password" ){
        toggle.type = "text"

      }else{
        toggle.type = "password"
      }
    }


    const  toggleShowProductPage = ()=>{
              router.push('/')
    }

    const login = ()=>{
      store.dispatch('AdminLogin', registerForm.value)
    }

    return{
      toggleShowProductPage,
      login,
      registerForm,
      showPassword,
      showPage
    }
  }
}
</script>

<style>

</style>
