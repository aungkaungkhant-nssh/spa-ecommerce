<template>
    <table id="datatable">
      <thead>
        <tr>
          <th v-for="column in adminTableColumns" :key="column.index">
              {{column}}
          </th>
          <th v-if="products">View</th>
          <th v-if="$route.path!='/admin/customer'">Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <tr v-for="d in data" :key="d.id">
          <td v-if=d.name>{{  d.name }}</td>
          <td v-if=d.email>{{ d.email }}</td>
          <td v-if=d.phone>{{  d.phone }}</td>
           
          <td v-if="$route.path!='/admin/customer'">
              <button class="btn btn-warning btn-sm" @click="editData(d.id)"><i class="fas fa-edit"></i></button>
          </td>
          <td>
              <button class="btn btn-danger btn-sm" @click="deleteData(d.id)"><i class="fas fa-trash"></i></button>
              
          </td>
        </tr>
      </tbody>
      <tbody v-if="products">
        <tr v-for="product in products" :key="product.id">
            <td>{{  product.category.name }}</td>
            <td>{{  product.brand.name }}</td>
            <td>{{  product.name }}</td>
            <td>{{ "$"+Number(product.price.toFixed(1)).toLocaleString() }}</td>
            <th>{{  product.discount_price || " - " }}</th>
            <!-- <td >{{ product.description.length>50 ? product.description.substr(0,50)+"..." : product.description}}</td> -->
            <td >
              <img :src="'../storage/images/'+product.image[0]" alt="" style="width:100px;height:100px">
            </td>
            <td v-if="product.color" >
               <span v-for="(color,index) in product.color" :key="index">
                 {{color.toUpperCase()}} {{product.color.length-1 !== index ? ",": " " }}
               </span>
            </td>
            <td v-if="product.size">
                <span v-for="(size,index) in product.size" :key="index">
                  {{size}} {{product.size.length-1 !== index ? ",": " " }}
                </span>
            </td>
            <td>
              <router-link :to="{name:'DetailProduct',params:{id:product.id}}" class="btn btn-primary btn-sm" ><i class="fas fa-eye"></i></router-link>
            </td>
           <td>
              <button class="btn btn-warning btn-sm" @click="editData(product.id)"><i class="fas fa-edit"></i></button>
           </td>
           <td>
              <button class="btn btn-danger btn-sm" @click="deleteData(product.id)"><i class="fas fa-trash"></i></button>
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
export default {
    props:["adminTableColumns","data","products"],
    methods:{
     editData(id){
         this.$emit("editData",id);
      },
      deleteData(id){
        this.$emit("deleteData",id)
      },
      
    }
  
}
</script>

<style>

</style>