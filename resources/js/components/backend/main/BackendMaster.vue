<template>
  <div>
      <!-- Navbar -->
      <backend-navbar></backend-navbar>
      <!-- /.navbar -->
      <!-- Main Sidebar Container -->
      <backend-sidebar></backend-sidebar>
      <!-- /.Main Sidebar Container -->
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Main content -->
        <section class="content">
          <div class="container-fluid p-5">
              <router-view></router-view>
          </div>
        </section>
        <!-- /.content -->
      </div>
      <!-- Footer -->
      <backend-footer></backend-footer>
      <!-- /.Footer -->
  </div>
</template>

<script>
import BackendFooter from '../BackendFooter.vue'
import BackendNavbar from '../BackendNavbar.vue'
import BackendSidbar from '../BackendSidebar.vue'
export default {
  components: { BackendNavbar, BackendSidbar, BackendFooter },

}
</script>

<style>

</style>