<template>
  <div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import { browserSessionPersistence, getAuth, 
onAuthStateChanged, setPersistence } from "firebase/auth"
import { mapState, useStore } from 'vuex'
import { onBeforeMount, onMounted } from 'vue'
import router from '@/router/index.js'
// import Header from '@/views/Header.vue'
// import Footer from '@/views/Footer.vue'

export default {
  setup(){
    const store = useStore()
    const auth = getAuth() //handle the getAuth from firebase auth
    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })
    // each time the component is (re)mounted, set the id, handle the token as well as the cookie browserSessionPersistence
    // also set the persistence so when new tab is open, there will be need for another verificationa as well as generate new token
    onMounted(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          // get the user token
          // alert(user.email)
          // console.log(user)
          user.getIdToken().then((token)=>{
            // set the cookie session max time
            document.cookie = `session= ${token}; max-age= ${60*60*24}`
            

          })
          // set the persistent to browser persistence so user has to sign in again when the open another tab
          setPersistence(auth, browserSessionPersistence)
        }else{
          router.push('/')
        }
      })
    })
    
  }
}


</script>

<style>

</style>