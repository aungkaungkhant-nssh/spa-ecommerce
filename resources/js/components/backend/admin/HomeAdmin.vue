<template>
  <div> 
      <Button color="btn btn-primary" icon="fas fa-plus-circle" @handleClick="createAdmin">Create</Button>
      <div class="mt-5">
          <Lists :adminTableColumns="adminTableColumns" :data="adminUser" @editData="editAdmin" @deleteData="deleteAdmin"></Lists>
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
      return{
        adminTableColumns:["Name","Email","Phone"]
      }
    },
    computed:{...mapGetters(["adminUser"]),
      
    },
    methods:{
      ...mapActions(["getAdminUser","deleteAdminUser"]),
      //create Admin
      createAdmin(){
        this.$router.push({name:"CreateAdmin"});
      },
      //edit Admin
       editAdmin(id){
         this.$router.push({name:"EditAdmin",params:{id}});
      },
      //delete Admin
       deleteAdmin(id){
          this.deleteAdminUser(id);
          Toast.fire({
            icon: 'success',
            title: 'Admin User Update Success'
         })
       }
    },
    mounted(){
        this.getAdminUser()
      
    }
 
}
</script>

<style>

</style>