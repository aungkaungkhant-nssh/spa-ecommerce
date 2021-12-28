
require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
//vue router
import VueRouter from 'vue-router'
import { routes } from './routes/userroute';
///vuex frontend file
import store from './store/frontend'
///nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
///vue loading 
import VueLoading from 'vuejs-loading-plugin'
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Waiting', // default 'Loading'
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
})

Vue.use(VueRouter)

Vue.component('public-master', require('./components/frontend/main/PublicMaster.vue').default);

Vue.component('public-header',require('./components/frontend/PublicHeader.vue').default)
Vue.component("public-footer",require("./components/frontend/PublicFooter.vue").default)


const router = new VueRouter({
    routes ,
    mode: 'history',
})
let authenticated;
if(localStorage.getItem("authenticated")=="true"){
  authenticated=true;
}else{
  authenticated=false;
}

/// router guard
router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && authenticated) next({ name: 'Home' })
  if(to.name==="Register" && authenticated) next({name:"Home"})
   else next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
const app = new Vue({
    el: '#app',
    router,
    store,
});
