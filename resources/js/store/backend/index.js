import Vuex from 'vuex'
import Vue from 'vue'
import AdminUser from './modules/AdminUser'

Vue.use(Vuex)
export default new Vuex.Store({modules:{AdminUser}})