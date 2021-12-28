<template>
  <div>
      <Button color="btn btn-primary" icon="fas fa-plus-circle" @handleClick="createCategory">Create</Button>
      <div class="mt-5">
          <Lists :adminTableColumns="adminTableColumns" :data="categories" @editData="editCategory"  @deleteData="delcat"></Lists>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Button from '../reuseable/Button'
import Lists from '../reuseable/Lists'
export default {
   components: {
    Lists, Button},
  data(){
    return{
      adminTableColumns:["Name"]
    }
  },
  methods:{
    ...mapActions(["getCategories","deleteCategory"]),

    createCategory(){
       this.$router.push({name:"CreateCategory"})
    },

    editCategory(id){
       this.$router.push({name:"EditCategory",params:{id}});
    },
    //delete Admin
    delcat(id){
      this.deleteCategory(id);
      Toast.fire({
        icon: 'success',
        title: 'Category Delete Success'
      })
    }
  },

  computed:{...mapGetters(["categories"])},

  mounted(){
    this.getCategories()
  }
}
</script>

<style>

</style>