<template>
  <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeAdmin'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Edit Admin</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
          <form @submit.prevent="updateAdmin">
          <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" v-model="adminEdit.name">
              
          </div>
          <div class="form-group">
              <label for="">Email</label>
              <input type="email" class="form-control" v-model="adminEdit.email">
              
          </div>
           <div class="form-group">
              <label for="">Phone</label>
              <input type="text" class="form-control" v-model="adminEdit.phone">
             
          </div>
          <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control" v-model="adminEdit.password">
          </div>
          <input type="submit" class="btn btn-primary" value="Update">
      </form>
      </div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed:{...mapGetters(["adminEdit"])},
  methods:{
    ...mapActions(["editAdminUser","updateAdminUser"]),
    updateAdmin(){
     
        this.updateAdminUser(this.adminEdit);
        this.$router.push({name:"HomeAdmin"});
      
         Toast.fire({
            icon: 'success',
            title: 'Admin User Update Success'
         })
    }
  },
  mounted(){
      this.editAdminUser(this.$route.params.id)
  },

}
</script>

<style>

</style>