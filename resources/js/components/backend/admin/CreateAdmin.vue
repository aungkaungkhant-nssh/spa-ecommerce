<template>
  <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeAdmin'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Create Admin</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
          <form @submit.prevent="createAdmin">
          <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" v-model="admin.name">
               <span v-if="errors.name" class="mt-1 text-danger">{{errors.name[0]}}</span>
          </div>
          <div class="form-group">
              <label for="">Email</label>
              <input type="email" class="form-control"  v-model="admin.email">
               <span v-if="errors.email" class="mt-1 text-danger">{{errors.email[0]}}</span>
          </div>
           <div class="form-group">
              <label for="">Phone</label>
              <input type="text" class="form-control"  v-model="admin.phone">
               <span v-if="errors.phone" class="mt-1 text-danger">{{errors.phone[0]}}</span>
          </div>
          <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control"  v-model="admin.password">
               <span v-if="errors.password" class="mt-1 text-danger">{{errors.password[0]}}</span>
          </div>
          <input type="submit" class="btn btn-primary" value="Create">
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          errors:[],
          admin:{
              name:"",
              email:"",
              phone:"",
              password:"",
          }
      }
  },
  methods:{
      async createAdmin(){
          try{
              //start loading
              this.$loading(true)
              await axios.post("/admin/create-admin",this.admin);
              this.$router.push({name:"HomeAdmin"});
               //end loading
              this.$loading(false)
               Toast.fire({
                    icon: 'success',
                    title: 'Admin User Create Success'
                })
          }catch(error){
              //end loading
              this.$loading(false)
              this.errors=error.response.data.errors;
          }
      }
  }
}
</script>

<style>

</style>