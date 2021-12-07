import Vuex from 'vuex'
import Vue from 'vue'
import UserAuth from './modules/UserAuth'

Vue.use(Vuex)
export default new Vuex.Store({modules:{UserAuth}})