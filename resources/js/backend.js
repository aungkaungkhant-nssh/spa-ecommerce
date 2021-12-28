
require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
///nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

///sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast
//vuex backend file
import store from './store/backend'


///component
Vue.component('backend-master', require('./components/backend/main/BackendMaster.vue').default);
Vue.component('backend-navbar', require('./components/backend/BackendNavbar.vue').default);
Vue.component('backend-sidebar', require('./components/backend/BackendSidebar.vue').default);
Vue.component('backend-footer', require('./components/backend/BackendFooter.vue').default);

//vue router
import {routes} from './routes/adminroute'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

///vue loading 
import VueLoading from 'vuejs-loading-plugin'
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Waiting', // default 'Loading'
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
})
///portal vue
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

const router = new VueRouter({
  routes ,
  mode: 'history',
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

const backend = new Vue({
    el: '#backend',
    router,
    store
});