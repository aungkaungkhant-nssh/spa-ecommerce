<template>
   <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeAdmin'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Edit Category</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
          <form @submit.prevent="update">
          <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" v-model="categoriesEdit.name">
          </div>
          <input type="submit" class="btn btn-primary" value="Update">
      </form>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{...mapGetters(["categoriesEdit"])},
    methods:{
        ...mapActions(["editCategory","updateCategory"]),
        update(){
            this.updateCategory(this.categoriesEdit)
            this.$router.push({name:"HomeCategory"});
      
            Toast.fire({
                icon: 'success',
                title: 'Category Update Success'
            })
        }
    },
    mounted(){
      this.editCategory(this.$route.params.id)
  },
}
</script>

<style>

</style>