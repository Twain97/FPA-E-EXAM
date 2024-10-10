<template>
  <div class="w-full h-full absolute flex">
     <div class="h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-11/12 md:w-2/3 py-10 bg-slate-50 shadow-2xl">
       <div class="flex z-50 md:py-2 w-full h-full ">
       <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
         <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto">

         <div class="w-full h-full  space-y-2 flex flex-col  md:space-y-3 ">
        <h2 class="text-slate-800 mx-auto font-bold text-lg uppercase">Sign up</h2>
        <h4 class="text-slate-800 font-bold text-sm md:text-base text-center">Enter your details below to signup.</h4>
        
        <form name="emailAndPassword" @submit.prevent="register()"
           class="flex flex-col space-y-3 ">
          <div class="flex flex-col space-y-3 md:flex-col text-sm md:text-base" >
            <label for="name"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Enter Full Name:</label>
            <input name="DisplayName" type="text" v-model.trim.lazy="registerForm.name" placeholder="Adigun Chibike Hassan"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            
            <label for="DOB"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold">Date of Birth:</label>
            <input name="Age" type="date" v-model.trim.lazy="registerForm.age"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            
            <label for="Email"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Enter Email Address:</label>
            <input name="Email" type="email" v-model.trim.lazy="registerForm.email" placeholder="Johndeo@gmail.com"
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
           

            <label for="department"  class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Select Your Department.</label>
            <select name="department" v-model="registerForm.department"
           class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400">
            <option v-for="dept in departmentOptions" :key="dept.label" :value="dept.value">{{ dept.label }}</option>
           </select>

            <label for="level"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">
              Select Your Level.
            </label>
            <select name="level" v-model="registerForm.level" 
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400">
              <option v-for="lev in levelOptions" :key="lev.label" :value="lev.value">{{ lev.label }}</option>
            </select>

            <label for="gender" class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Select Your Gender.</label>
            <select name="gender" v-model="registerForm.gender" 
            class="bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400">
              <option v-for="gend in genderOptions" :key="gend.label" :value="gend.value">{{ gend.label }}</option>
            </select>

            <label for="matric"  class="bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold">Enter Matric Number:</label>
            <input name="matric" type="text" v-model.trim.lazy="registerForm.matric" placeholder="fpa/cs/19/2-0000"
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

            <label for="password"  class="bg-inherit mx-auto -mb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"> Confirm Password: </label>
          <input id="password2" type="password"  placeholder="Confirm password" 
          class="bg-inherit m-auto text-xs md:text-sm py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
            
          </div>
          
          

          <input type="submit" value="submit" class="bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg" />
          </form>

          
        </div>
        <div class="w-full flex justify-evenly md:justify-between mt-10 font-semibold border-red-500 md:mx-auto md:w-2/4">
            <p class="text-center text-sm md:text-base my-auto">Already verified? Proceed to </p>
            <router-link to="/login" class=" bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Log In</router-link>
        </div>
      </div>
     
    </div>
  </div>
 </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast'
export default{
  data(){
    return{
      showEye:true,
      levelOptions:[
        { label: 'ND 1', value: 'nd1' },
        { label: 'ND 2', value: 'nd2'},
        { label: 'HND 1', value: 'hnd1' },
        { label: 'HND 2', value: 'hnd2' },
      ], 
      genderOptions:[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female'},
      ]
    }
  },
  methods: {
    eyes(){
      this.showEye = !this.showEye
    },
  },

  setup(){
  const registerForm = ref({});
  const store = useStore();
  const toast = useToast();
  const department = ref();
  const departmentOptions = [
        { label: 'Computer Science', value: 'computer science' },
        { label: 'Science Laboratory Technology', value: 'slt'},
        { label: 'Engineering', value: 'engineering' },
        { label: 'Law', value: 'law' },
        { label: 'Tourism', value: 'tourism' },
        { label: 'Agriculture', value: 'agriculture' },
        { label: 'Pharmacy', value: 'pharmacy' },
        { label: 'Banking and Finance', value: 'banking and finance' },
        { label: 'Education', value: 'education' },
        { label: 'Mass Communication', value: 'mass communication' },
        { label: 'Business Administration', value: 'Business Administration'},
        { label: 'Food Technology', value: 'food technology'},
        { label: 'Glass Technology', value: 'glass technology'},
        { label: 'Accounting', value: 'accounting'},
        { label: 'Taxation', value: 'taxation'},
        { label: 'Fisheries', value: 'fisheries'},
        { label: 'Civil Engineering', value: 'civil engineering' },
        { label: 'Mechanical Engineering', value: 'mechanical engineering' },
        { label: 'Electrical Engineering', value: 'electrical engineering' },
        { label: 'Estate Management', value: 'estate management' },
        { label: 'Statistics', value: 'statistics' },
        { label: 'Art and industrial Design', value: 'art and industrial design' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Architectural Technology', value: 'architectural technology' },
      ];

  const vib = ( )=>{
    navigator.vibrate([100, 50,]);
  }

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

    const register = ()=>{
      var password = document.getElementById('password')
      var password2 = document.getElementById('password2')

      if(password.value != '' && password2.value != ''){
        if(password.value === password2.value){
          store.dispatch('register', registerForm.value)
        }else{
          
                vib( )
                toast.add({ severity: 'error', summary: 'Error!', detail: 'Passwords not matched', life: 3000 });
        }
      }
    }

    return{
    registerForm,
    showPassword,
    register,
    departmentOptions,
    department
  }
  }

  
}



</script>

<style>

</style>

