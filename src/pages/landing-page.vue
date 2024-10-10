<template>
  <div class="w-full h-full absolute flex">
    
    <div class="h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl">
      
      <div class="flex z-50 md:py-2 w-full h-full ">
       <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
         <img src="/logo.png" alt="Fpa logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto">

         <div class="w-full h-full flex flex-col space-y-6 text-center md:space-y-12">
           <h2 class="text-slate-800 mx-auto font-bold text-lg ">Welcome to FPA E-exam.</h2>
           <h4 class="text-slate-800 font-semibold text-xs md:text-base">Please select 
            <span class="font-bold">Sign Up</span> if you're new to the system. 
            <br><span class="font-bold">OR</span><br> Select 
            <span class="font-bold">Log in</span> if you have already registered.</h4>
           

           <div class="flex justify-evenly">
            <!-- <router-link to="/confirmSignup">Confirm</router-link> -->
            <router-link to="/signup" class="bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Sign Up</router-link>
            <router-link to="/login" class="bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"> Log In</router-link>
           </div>

           <p class="underline text-sm md:text-base text-center"><router-link to="/adminLogin" class=" text-blue-500 underline ">Login as an admin.</router-link></p>
           
           
         </div>
       </div>
     </div>
 </div>
 </div>

</template>

<script>
export default{

}
</script>

<style>

</style>