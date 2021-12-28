<template>
  <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeProduct'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Create Product</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
        <form @submit.prevent="createProduct">
          <div class="form-group">
              <label for="">Category</label>
              <select v-model="product.category_id" class="form-control">
                   <option value="">Select Category</option>
                   <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                       {{cat.name}}
                   </option>
              </select>
              <span v-if="errors.category_id" class="mt-1 text-danger">{{errors.category_id[0]}}</span>
          </div>
          <div class="form-group">
              <label for="">Brand</label>
              <select v-model="product.brand_id" class="form-control">
                   <option value="">Select Brand</option>
                   <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                       {{brand.name}}
                   </option>
              </select>
               <span v-if="errors.brand_id" class="mt-1 text-danger">{{errors.brand_id[0]}}</span>
          </div>
         <div class="form-group">
              <label for="">Name</label>
              <input type="text" class="form-control" v-model="product.name">
               <span v-if="errors.name" class="mt-1 text-danger">{{errors.name[0]}}</span>
          </div>
          <div class="form-group">
              <label for="">Price</label>
              <input type="text" class="form-control" v-model="product.price">
               <span v-if="errors.price" class="mt-1 text-danger">{{errors.price[0]}}</span>
          </div>
          <div class="form-group">
              <label for="">Select Image</label>
              <input type="file" class="form-control" multiple @change="fileHandleChange">
              <span v-if="errors.pics" class="mt-1 text-danger">{{errors.pics[0]}}</span>

              <div class="my-3" v-if="url.length>0">
                <div v-for="(image,index) in url" :key="index" class="previewContainer">
                    <img :src="image.img" alt=""  style="width:100%;height:100%">
                    <i class="fas fa-times-circle text-primary" @click="trashImage(image)"></i>
                </div>
              </div>
          </div>
          <div class="form-group">
              <label for="">Description</label>
              <textarea class="form-control" v-model="product.description"></textarea>
              <span v-if="errors.description" class="mt-1 text-danger">{{errors.description[0]}}</span>
          </div>
          <div class="form-group my-2">
                <label for="">Select Color</label>
                <div class="form-check form-check-inline" v-for="color in colorData" :key="color.index">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="product.color"  :value="color">
                    <label class="form-check-label" for="inlineCheckbox1">{{color}}</label>
               </div>
          </div>
           <div class="form-group my-2">
                <label for="">Select Size</label>
                <div class="form-check form-check-inline" v-for="size in sizeData" :key="size.index">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1"  v-model="product.size" :value="size">
                    <label class="form-check-label" for="inlineCheckbox1">{{size}}</label>
               </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Create">
       </form>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    
    computed:{...mapGetters(["categories","brands"])},
    data(){
        return {
            product:{
                category_id:"",
                brand_id:"",
                name:"",
                price:"",
                description:"",
                image:[],
                color:[],
                size:[]
            },
            colorData:["red","blue","black","green","yellow"],
            sizeData:["S","M","L","XL","XXL"],
            errors:[],
            url:[],
        }
    },
    methods:{
         ...mapActions(["getCategories","getBrands"]),
        fileHandleChange(e){
           let selectedFiles=e.target.files;
           if(!selectedFiles.length) return false;
           for(let i=0;i<selectedFiles.length;i++){
               this.product.image.push(selectedFiles[i])
           }
          this.url.push({name:selectedFiles[0].name,img:URL.createObjectURL(selectedFiles[0])});
        },
        trashImage(image){
            this.url=this.url.filter((u)=>(
                u.name!=image.name
            ))
              this.product.image=this.product.image.filter((e)=>(
                e.name!=image.name
            ))
        },
        async createProduct(){
            try{
                //start loading
                this.$loading(true)
                const formData=new FormData();
                for(let i=0; i<this.product.image.length;i++){
                        formData.append('pics[]',this.product.image[i]);
                }
                formData.set("category_id",this.product.category_id)
                formData.set("brand_id",this.product.brand_id)
                formData.set("name",this.product.name)
                formData.set("price",this.product.price)
                formData.set("description",this.product.description)
                formData.set("color",this.product.color)
                formData.set("size",this.product.size)
                await axios.post('/admin/products',formData)

                this.$router.push({name:"HomeProduct"})
                //end loading
                this.$loading(false)
               Toast.fire({
                    icon: 'success',
                    title: 'Product Create Success'
                })
            }catch(error){
                //end loading
               this.$loading(false)
               this.errors=error.response.data.errors;
            }
        }
    },
    mounted(){
        this.getCategories();
        this.getBrands();
    }
}
</script>

<style>

</style>