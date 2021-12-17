<template>
    <table id="datatable">
      <thead>
        <tr>
          <th v-for="column in adminTableColumns" :key="column.index">
              {{column}}
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="data.length>=0">
        <tr v-for="d in data" :key="d.id">
          <td v-if=d.name>{{  d.name }}</td>
          <td v-if=d.email>{{ d.email }}</td>
          <td v-if=d.phone>{{  d.phone }}</td>
          <td>
              <button class="btn btn-warning btn-sm" @click="editData(d.id)"><i class="fas fa-edit"></i></button>
          </td>
          <td>
              <button class="btn btn-danger btn-sm" @click="deleteData(d.id)"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
export default {
    props:["adminTableColumns","data"],
    methods:{
     editData(id){
         this.$emit("editData",id);
      },
      deleteData(id){
        this.$emit("deleteData",id)
      }
    }

}
</script>

<style>

</style>