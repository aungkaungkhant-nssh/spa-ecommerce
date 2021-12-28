<template>
   <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeBrand'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Create Brand</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
          <form @submit.prevent="createBrand">
          <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" v-model="brand.name">
               <span v-if="errors.name" class="mt-1 text-danger">{{errors.name[0]}}</span>
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
      brand:{
        name:""
      }
    }
  },
  methods:{
    async createBrand(){
            try{
              //start loading
              this.$loading(true)
              await axios.post("/admin/brands",this.brand);
              this.$router.push({name:"HomeBrand"});
               //end loading
              this.$loading(false)
               Toast.fire({
                    icon: 'success',
                    title: 'Brand Create Success'
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