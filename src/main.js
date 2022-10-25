import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//<-------------->irebase------------------------->
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
// import { db } from "./firebase";
// console.log(db)

const firebaseConfig = {
  apiKey: "AIzaSyDMgWml7AtBpyQOiD9_B_cWppsZWx4ramg",
  authDomain: "sprint8-4c578.firebaseapp.com",
  projectId: "sprint8-4c578",
  storageBucket: "sprint8-4c578.appspot.com",
  messagingSenderId: "1098827627651",
  appId: "1:1098827627651:web:2ad9996060b475f5a96fb6",
  measurementId: "G-Y3D4GZR5CY"
};
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
