<template>
   <div> 
      <Button color="btn btn-primary" icon="fas fa-plus-circle" @handleClick="createBrand">Create</Button>
      <div class="mt-5">
          <Lists :adminTableColumns="adminTableColumns" :data="brands"
          @editData="editBrand"  @deleteData="delb"></Lists>
      </div>
   </div>
</template>

<script>
import Lists from '../reuseable/Lists'
//button component
import Button from '../reuseable/Button'
import { mapActions, mapGetters } from 'vuex'
export default {
     components: {
    Lists, Button},
    data(){
        return {
            adminTableColumns:["Name"]
        }
    },
    computed:{...mapGetters(["brands"])},

    methods:{
        ...mapActions(["getBrands","deleteBrand"]),
        createBrand(){
            this.$router.push({name:"CreateBrand"})
        },
        editBrand(id){
             this.$router.push({name:"EditBrand",params:{id}});
        },
        delb(id){
            this.deleteBrand(id);
            Toast.fire({
                icon: 'success',
                title: 'Brand Delete Success'
            })
        }
    },

    mounted(){
        this.getBrands();
    }
}
</script>

<style>

</style>