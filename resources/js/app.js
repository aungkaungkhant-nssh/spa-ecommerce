
require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router'
import { routes } from './routes/userroute';
import store from './store/frontend'
Vue.use(VueRouter)



Vue.component('public-master', require('./components/frontend/main/PublicMaster.vue').default);
Vue.component('public-header',require('./components/frontend/PublicHeader.vue').default)
Vue.component("public-footer",require("./components/frontend/PublicFooter.vue").default)

const router = new VueRouter({

    routes ,
    mode: 'history',
})
const app = new Vue({
    el: '#app',
    router,
    store,
});
