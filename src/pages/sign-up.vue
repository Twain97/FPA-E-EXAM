<template>
  <div class="w-full h-full absolute flex">
     <div class="h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl">
       <div class="flex z-50 md:py-2 w-full h-full ">
       <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
         <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto">

         <div class="w-full h-full  space-y-2 flex flex-col  md:space-y-5 ">
        <h2 class="text-slate-800 mx-auto font-bold text-lg lg:ml-12">Sign up</h2>
        <h4 class="text-slate-800 font-bold text-xs text-center">Enter your email and password to signup.</h4>
        
        <form name="emailAndPassword" @submit.prevent="register()"
           class="flex flex-col space-y-3 ">
        
          <div class="flex flex-col space-y-3 md:flex-col text-xs md:text-sm" >
            <input name="DisplayName" type="text" v-model.trim.lazy="registerForm.name" placeholder="Full Name"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            <input name="Email" type="email" v-model.trim.lazy="registerForm.email" placeholder="Email"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            <input name="Phone" type="tel" v-model.trim.lazy="registerForm.phone" placeholder="Enter Phone Number"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            <input name="matric" type="text" v-model.trim.lazy="registerForm.matric" placeholder="Matric (fpa/cs/19/2-0000)"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            
            <div class="bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400">
              <input id="password" type="password" v-model.trim.lazy="registerForm.password" placeholder="Enter Password"
              class="bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold "/>
              <font-awesome-icon v-if="showEye" icon="fa-solid fa-eye" @click="(showPassword(), eyes())" 
              class="p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400" />
              <font-awesome-icon v-else icon="fa-solid fa-eye-slash" @click="(showPassword(), eyes())" 
              class="p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400" />

            </div>
            
          </div>
          
          <input id="password2" type="password"  placeholder="Confirm password" 
          class="bg-inherit m-auto text-xs md:text-sm py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>

          <Button label="Submit" class="bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg" />
          </form>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { ref } from 'vue';
export default{
  data(){
    return{
      showEye:true
    }
  },
  methods: {
    eyes(){
      this.showEye = !this.showEye
    },
  },

  setup(){
  const registerForm = ref({})
  let showPassword = () =>{
    const toggle = document.getElementById("password")
    const toggle2 = document.getElementById("password2")
      if(toggle.type === "password" && toggle2.type === "password" ){
        toggle.type = "text"
        toggle2.type = "text"

      }else{
        toggle.type = "password"
        toggle2.type = "password"
      }
    }

    return{
    registerForm,
    showPassword

  }
  }

  
}



</script>

<style>

</style>

