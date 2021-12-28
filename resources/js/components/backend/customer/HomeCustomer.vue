<template>
    <div>
        <Lists :adminTableColumns="adminTableColumns" :data="customers" @deleteData="delCus"></Lists>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Lists from '../reuseable/Lists'
export default {
  components: { Lists },
  data(){
      return {
           adminTableColumns:["Name","Email","Phone"]
      }
  },
  methods:{
      ...mapActions(["getCustomers","deleteCustomers"]),
      delCus(id){
         this.deleteCustomers(id);
          Toast.fire({
          icon: 'success',
          title: 'Customer Delete Success'
         })    
      }
  },
  computed:{...mapGetters(["customers"])},
  mounted(){
      this.getCustomers()
  }
}
</script>

<style>

</style>