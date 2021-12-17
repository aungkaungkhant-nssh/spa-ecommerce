import Vuex from 'vuex'
import Vue from 'vue'
import AdminUser from './modules/AdminUser'
import Category from './modules/Category'
Vue.use(Vuex)
export default new Vuex.Store({modules:{AdminUser,Category}})