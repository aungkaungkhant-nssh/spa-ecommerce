import Vuex from 'vuex'
import Vue from 'vue'
import AuthRoute from './modules/AuthRoute'

Vue.use(Vuex)
export default new Vuex.Store({modules:{AuthRoute}})