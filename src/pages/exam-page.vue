<template>
  <div class="w-fit border-red-500 mx-auto">
    <header-component></header-component>
    
   <div class="bg-slate-200 flex justify-between my-2 border-black px-2 md:px-8 md:w-wd8 md:mx-auto md:text-base rounded-lg">
     <h2 class="py-2 text-base font-semibold md:text-2xl my-auto ">Course Code: GNS 501</h2>
     <div  class="cursor-pointer bg-cyan-600 rounded-xl space-x-2 w-fit text-center flex px-2 md:px-4 py-2 my-2 text-xs font-semibold shadow-lg md:text-base">
      <!-- Show this on smaller devices -->
      <fulfilling-bouncing-circle-spinner class="m-auto block md:hidden"
        :animation-duration="4000"
        :size="15"
        color="#ff1d5e"
      />


      <!-- Show this on medium size screen upward -->
      <fulfilling-bouncing-circle-spinner class="m-auto hidden md:block"
        :animation-duration="4000"
        :size="20"
        color="#ff1d5e"
      />

         <p class="py-1">Time : {{ formattedTime }}</p>
         
     </div>
   </div>
  
   <div class="mx-auto">
      <div class="w-98 flex flex-col mt-5 mb-10  text-xs md:lg capitalize  rounded-xl shadow-black shadow-lg -shadow-lg">
        <div class="text-lg font-bold text-center underline py-2">Answer the following questions</div>
        <div class="h-fitm px-2 md:px-10 w-full flex flex-wrap border-red-500">
          <div v-for="(questions, index) in this.$store.state.questions" :key="index" 
          class="my-3 h-fit w-1/2 lg:w-1/3 border-red-500">
            <h3 class="text-base font-bold md:text-lg">({{ index + 1 }})  {{ questions.questionDetails.question }}</h3>
            <div v-for="option in questions.questionDetails.options" :key="option" class="my-2 ml-5 flex ">
              <input type="radio" 
                    :name="questions.questionDetails.name"
                    v-model="selectedAnswers[questions.questionDetails.name]" 
                    :value="option" 
                    id="" 
                    required
              >
              <label for="options" class="my-auto ml-2 text-base" > {{ option }}</label>
            </div>
          </div>
        </div>

        <button @click="submit()" class="w-11/12 my-4 mx-auto text-base md:text-lg font-bold bg-purple-900 py-5 text-slate-200  md:w-3/4 md:mx-auto rounded-xl shadow-lg" >Submit</button>
      </div>
   </div>
  </div>
  
  </template>
  
  <script>
  import headerComponent from '@/views/header.vue'
  import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
  import router from '@/router/index.js'
  
  export default {
    components:{
      FulfillingBouncingCircleSpinner,
      headerComponent
    },
    computed: {
      formattedTime() {
        const minutes = Math.floor(this.time / 60)
        const seconds = this.time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    },
    data(){
      return{
        time:600,
        selectedAnswers: {}, // Store selected answers by question name
        answers:[]
      }
    },
    mounted(){
      this.startTimer();
    },
    beforeUnmounted(){
      this.stopTimer(); 
    },
    methods:{
      startTimer() {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            this.stopTimer(); 
            this.handleTimerEnd();
          }
        }, 1000);
      },
      stopTimer() {
        clearInterval(this.timer);
        this.timer = null; 
      },
      handleTimerEnd() {
        router.push('/scorePage'); 
      },
      
      submit() {
    // confirm if user is ready to submit answers

    if(confirm("Are you ready to submit answers?")){
      // Iterate through the selectedAnswers object using Object.entries()
      for (const [questionName, selectedAnswer] of Object.entries(this.selectedAnswers)) {
        this.answers.push( selectedAnswer );

      }

      this.$store.dispatch('submitQuiz', this.answers);
      

      this.selectedAnswers = {}; // Clear the selectedAnswers object after submission
      this.answers = []; // Clear the answers array after submission
      router.push('/confirmScore');
    }else{
      return;
    }

  }
    }
  }
  </script>
  
  <style>
  
  </style>
  