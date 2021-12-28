import Vuex from 'vuex'
import Vue from 'vue'
import AdminUser from './modules/AdminUser'
import Category from './modules/Category'
import Brand from './modules/Brand'
import Product from './modules/Product'
import Customer from './modules/Customer'
Vue.use(Vuex)
export default new Vuex.Store({modules:{AdminUser,Category,Brand,Product,Customer}})