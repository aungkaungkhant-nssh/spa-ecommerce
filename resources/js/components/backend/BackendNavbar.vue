<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      
      <li class="nav-item">
        <button class="btn btn-warning" @click="adminLogout">
          Logout<i class="fas fa-sign-out-alt ml-2"></i>
        </button>
      </li>
   
    </ul>
  </nav>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions(["getLoginAdmin"]),
    async adminLogout(){
      try{
          this.$loading(true)
          await axios.post("/admin/logout")
           this.$loading(false)
          this.$router.push("/admin/login");
      }catch(error){
        console.log(error)
      }
    }
  },
 
}
</script>

<style>

</style>