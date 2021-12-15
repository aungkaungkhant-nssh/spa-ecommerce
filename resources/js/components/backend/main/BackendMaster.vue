<template>
  <div>
      <!-- Navbar -->
      <backend-navbar v-if="bar"></backend-navbar>
      <!-- /.navbar -->
      <!-- Main Sidebar Container -->
      <backend-sidebar v-if="bar"></backend-sidebar>
      <!-- /.Main Sidebar Container -->
      <!-- Content Wrapper. Contains page content -->
      <div :class="{'content-wrapper':bar}">
        <!-- Main content -->
        <section class="content" >
          <div class="container-fluid p-5">
              <router-view></router-view>
          </div>
        </section>
        <!-- /.content -->
      </div>
      <!-- Footer -->
      <backend-footer v-if="bar"></backend-footer>
      <!-- /.Footer -->
  </div>
</template>

<script>
import BackendFooter from '../BackendFooter.vue'
import BackendNavbar from '../BackendNavbar.vue'
import BackendSidbar from '../BackendSidebar.vue'
export default {
  components: { BackendNavbar, BackendSidbar, BackendFooter },
  computed:{
    bar(){
      if(this.$route.path=="/admin/login"){
        return false;
      }else{
        return true;
      }
    }
  },
 

}
</script>

<style>

</style>