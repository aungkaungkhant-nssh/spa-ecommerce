
require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
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
//vue router
import {routes} from './routes/adminroute'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    routes ,
    mode: 'history',
})
///component
Vue.component('backend-master', require('./components/backend/main/BackendMaster.vue').default);
Vue.component('backend-navbar', require('./components/backend/BackendNavbar.vue').default);
Vue.component('backend-sidebar', require('./components/backend/BackendSidebar.vue').default);
Vue.component('backend-footer', require('./components/backend/BackendFooter.vue').default);

const backend = new Vue({
    el: '#backend',
    router,
    store
});