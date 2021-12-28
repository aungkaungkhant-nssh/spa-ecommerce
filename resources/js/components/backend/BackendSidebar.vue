<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link text-center">
        <span class="brand-text font-weight-light">SPA Ecommerce</span>
      </a>
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> -->
          </div>
          <div class="info">
            <a href="#" class="d-block">{{loginAdmin.name}}</a>
          </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
             <li class="nav-item">
              <router-link :to="route.adminUser" class="nav-link" :class="{active:currentRoute==route.adminUser}">
                <i class="fas fa-user-shield"></i>
                <p>
                  Admin user
                </p>
              </router-link>
            </li>
             <li class="nav-item">
              <router-link :to="route.customer" class="nav-link" :class="{active:currentRoute==route.customer}">
                <i class="fas fa-users"></i>
                <p>
                   Customer
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" >
                <i class="nav-icon fas fa-table"></i>
                <p>
                  Products
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link :to="route.category" class="nav-link" :class="{active:currentRoute==route.category}">
                       <i class="far fa-circle nav-icon"></i>
                      <p>
                        Category
                      </p>
                    </router-link>
                </li>
                 <li class="nav-item">
                    <router-link :to="route.brand" class="nav-link" :class="{active:currentRoute==route.brand}">
                       <i class="far fa-circle nav-icon"></i>
                      <p>
                         Brand
                      </p>
                    </router-link>
                </li>
                 <li class="nav-item">
                    <router-link :to="route.product" class="nav-link" :class="{active:currentRoute==route.product}">
                       <i class="far fa-circle nav-icon"></i>
                      <p>
                         Product
                      </p>
                    </router-link>
                </li>
               
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
 computed:{
   ...mapGetters(["loginAdmin"]),
    currentRoute(){
        return this.$route.path
    }  
  },
  data(){
    return{
      route:{
         adminUser:'/admin/admin-user',
         category:'/admin/category',
         product:'/admin/product',
         brand:'/admin/brand',
         customer:'/admin/customer'
      }
    }
  },
 methods:{...mapActions(["getLoginAdmin"])},
 
  mounted(){
      this.getLoginAdmin()
   
  }
}
</script>

<style>

</style>