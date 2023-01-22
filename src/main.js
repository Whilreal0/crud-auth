import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
import 'firebase/auth'

import '@/assets/tailwind.css'




import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCJdKvZOz60lwkfJglDIDeeS7w16xiNz7s",
  authDomain: "auth-vue-c20d5.firebaseapp.com",
  projectId: "auth-vue-c20d5",
  storageBucket: "auth-vue-c20d5.appspot.com",
  messagingSenderId: "184627218380",
  appId: "1:184627218380:web:7428697e848936610f7f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
