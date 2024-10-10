/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faX} from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config';
// import "primevue/resources/themes/lara-light-indigo/theme.css";
import Button from "primevue/button"
import Avatar from 'primevue/avatar';
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice'
import Select from 'primevue/select';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue,{
    unstyled:true
});   
library.add(faEye, faEyeSlash, faX)
app.use(ToastService);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Avatar', Avatar);
app.component('Select', Select);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.component('Button', Button)
app.mount('#app')
