<template>
  <div> 
      <Button color="btn btn-primary" icon="fas fa-plus-circle" @handleClick="createProduct">Create</Button>
      <div class="mt-4">
          <Lists :adminTableColumns="adminTableColumns" :products="products" @editData="editProduct" @deleteData="delp"></Lists>
      </div>
   </div>
</template>

<script>
import Lists from '../reuseable/Lists'
//button component
import Button from '../reuseable/Button'
import { mapActions, mapGetters } from 'vuex'
export default {
      components:{
    Lists, Button},
    data(){
        return{
            adminTableColumns:["Category","Brand","Name","Price","Discount","Image","Color","Size"]
        }
    },
    computed:{...mapGetters(["products"])},
    methods:{
        ...mapActions(["getProducts","deleteProduct"]),
        createProduct(){
            this.$router.push({name:"CreateProduct"})
        },
        editProduct(id){
            this.$router.push({name:"EditProduct",params:{id}})
        },
        delp(id){
            this.deleteProduct(id)
            Toast.fire({
                icon: 'success',
                title: 'Product Delete Success'
            })
        }
    },
   
    mounted(){
        this.getProducts();
      
    }
}
</script>

<style>

</style>