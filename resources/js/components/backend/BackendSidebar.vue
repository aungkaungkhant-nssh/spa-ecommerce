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
            <!-- <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-table"></i>
                <p>
                  Tables
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/jsgrid.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li> -->
             <li class="nav-item">
              <router-link to="/admin/admin-user" class="nav-link">
                <i class="fas fa-user-shield"></i>
                <p>
                  Admin user
                </p>
              </router-link>
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
 computed:{...mapGetters(["loginAdmin"])},
 methods:{...mapActions(["getLoginAdmin"])},
  mounted(){
      this.getLoginAdmin()
  }
}
</script>

<style>

</style>