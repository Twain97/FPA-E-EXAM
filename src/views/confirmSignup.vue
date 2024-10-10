<template>
  <Transition name="slide-fade" >
      <div v-show="showPage" class="fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800">
      
          <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
              <font-awesome-icon icon="fa-solid fa-x"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />

          </div>
      
          <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm">
             
            <div class="flex z-50 my-auto  md:py-2 w-full h-full ">
              <div class="m-auto flex flex-col space-y-2 md:space-y-5">
              <div class="md:hidden">
                <svg class="checkmark m-auto " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
            

              <div class="animation-ctn m-auto hidden md:flex">
                  <div class="icon icon--order-success svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
                          <g fill="none" stroke="#22AE73" stroke-width="2"> 
                            <circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
                            <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
                            <polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
                          </g> 
                        </svg>
                      </div>
              </div>
              <h2 class="font-bold text-base mx-auto md:text-lg">Details Registered Successfully!</h2>

              <div class="mt-10 mx-auto text-blue-500 font-semibold underline">
                <router-link to="/" @click="toggleShowProductPage()"> Go to Home Page.</router-link>
              </div>

              <h1 class="font-semibold text-base text-center"> Await further instructions for face capturing to complete registration.
                <br>
                <br>
                You will be rediected to Home Page in :
                <span class="font-extrabold text-lg">{{ timer }}</span> seconds. </h1>

            </div>  
          </div>
          </div>
      </div>
</Transition>
</template>
<script>
import router from '../router/index.js'
import { useStore } from 'vuex';
export default {
  data(){
    return{
      timer:20
    }
  },

  mounted () {
    setInterval(()=>{
      this.timer = this.timer - 1
    }, 1000)

    setTimeout(()=>{
      this.$store.dispatch('logOut')
      router.push('/')
     
    }, 21000)
  },
  unmounted(){
    clearInterval();
    clearTimeout();
  },

  setup(){
    let showPage = true;
    const store = useStore(); 


    const  toggleShowProductPage = ()=>{
      store.dispatch('logOut')
      router.push('/')
    }

    return{
      toggleShowProductPage,
      showPage
    }
  }
}
</script>

<style scoped>

/* // Colors
#7ac142: #7ac142;
#fff: #fff;

// Misc
cubic-bezier(0.650, 0.000, 0.450, 1.000): cubic-bezier(0.650, 0.000, 0.450, 1.000); */


.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}




.animation-ctn{
  text-align:center;
  margin-top:5em;
}

	@-webkit-keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 200px
    }
}

@-ms-keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 200px
    }
}

@keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 0px
    }
}

@-webkit-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 480px
   
    }

    100% {
        stroke-dashoffset: 960px;
      
    }
}

@-ms-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 240px
    }

    100% {
        stroke-dashoffset: 480px
    }
}

@keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 480px 
    }

    100% {
        stroke-dashoffset: 960px
    }
}

@keyframes colored-circle { 
    0% {
        opacity:0
    }

    100% {
        opacity:100
    }
}

/* other styles */
/* .svg svg {
    display: none
}
 */
.inlinesvg .svg svg {
    display: inline
}

/* .svg img {
    display: none
} */

.icon--order-success svg polyline {
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards
}

.icon--order-success svg circle {
    -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
    animation: checkmark-circle 0.6s ease-in-out backwards;
}
.icon--order-success svg circle#colored {
    -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
    animation: colored-circle 0.6s ease-in-out 0.7s backwards;
} 
</style>