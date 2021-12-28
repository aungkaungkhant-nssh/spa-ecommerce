<template>
 <div class="card">
      <div class="card-header">
          <div class="row">
              <div class="col-md-5">
                  <router-link :to="{name:'HomeProduct'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
              </div>
              <div class="col-md-7">
                  <h4 class="mb-0">Edit Product</h4>
              </div>
          </div>
      </div>
      <div class="card-body">
            <form @submit.prevent="update">
                <div class="form-group">
                    <label for="">Category</label>
                    <select v-model="productEdit.category_id" class="form-control">
                        <option value="">Select Category</option>
                        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                            {{cat.name}}
                        </option>
                    </select>
                    <span v-if="errors.category_id" class="mt-1 text-danger">{{errors.category_id[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="">Brand</label>
                    <select v-model="productEdit.brand_id" class="form-control">
                        <option value="">Select Brand</option>
                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                            {{brand.name}}
                        </option>
                    </select>
                    <span v-if="errors.brand_id" class="mt-1 text-danger">{{errors.brand_id[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control" v-model="productEdit.name">
                    <span v-if="errors.name" class="mt-1 text-danger">{{errors.name[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="">Price</label>
                    <input type="text" class="form-control" v-model="productEdit.price">
                    <span v-if="errors.price" class="mt-1 text-danger">{{errors.price[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="">Select Image</label>
                    <input type="file" class="form-control mb-3" multiple @change="fileHandleChange">

                    <div class="my-2 d-inline" >
                         <div v-for="(image,index) in productEdit.image" :key="index" class="previewContainer">
                             <img  :src="'http://'+host+'/storage/images/'+image" alt="" style="width:150px;height:150px">
                            <i class="fas fa-times-circle text-primary" @click="trashOriginalImage(image)"></i>
                         </div>
                    </div>
                     <div class="my-3 d-inline" v-if="!show">
                         <div v-for="(image,index) in url" :key="index" class="previewContainer">
                              <img :src="image.img" alt=""  style="width:100%;height:100%">
                              <i class="fas fa-times-circle text-primary" @click="trashImage(image)"></i>
                         </div>
                     </div>
                    <span v-if="errors.pics" class="mt-1 text-danger">{{errors.pics[0]}}</span>
                </div>
                <div class="form-group">
                    <label for="">Description</label>
                    <textarea class="form-control" v-model="productEdit.description"></textarea>
                    <span v-if="errors.description" class="mt-1 text-danger">{{errors.description[0]}}</span>
                </div>
                <div class="form-group my-2">
                        <label for="">Select Color</label>
                        <div class="form-check form-check-inline" v-for="color in colorData" :key="color.index">
                          <input v-if="productEdit.color && productEdit.color.indexOf(color)>=0" class="form-check-input" type="checkbox" id="inlineCheckbox1"  v-model="productEdit.color"  :value="color" checked>
                          <input v-else class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="productEdit.color"  :value="color" >
                          <label class="form-check-label" for="inlineCheckbox1">{{color}}</label>
                    </div>
                </div>
                <div class="form-group my-2">
                        <label for="">Select Size</label>
                        <div class="form-check form-check-inline" v-for="size in sizeData" :key="size.index">

                            <input v-if="productEdit.size && productEdit.size.indexOf(size)>=0" class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="productEdit.size" :value="size" checked>
                            
                            <input v-else class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="productEdit.size" :value="size">
                            <label class="form-check-label" for="inlineCheckbox1">{{size}}</label>
                    </div>
                </div>
          <input type="submit" class="btn btn-primary" value="Update">
       </form>
      </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return{
            show:true,
            url:[],
            colorData:["red","blue","black","green","yellow"],
            sizeData:["S","M","L","XL","XXL"],
            host:"",
            editImage:[],
            errors:[]
           
        }
    },
    computed:{
        ...mapGetters(["categories","brands","productEdit"]),
    },
    methods:{
        ...mapActions(["getCategories","getBrands","editProduct","updateProduct"]),
        fileHandleChange(e){
            this.show=false;
            const file = e.target.files;

            if(!file.length) return false;

            for(let i=0;i<file.length;i++){
                this.editImage.push(file[i])
            }
            this.url.push({name:file[0].name,img:URL.createObjectURL(file[0])});

        },
        trashImage(image){
            this.url=this.url.filter((u)=>(
                u.name!=image.name
            ))
            this.editImage=this.editImage.filter((e)=>(
                e.name!=image.name
            ))
        
        },
        trashOriginalImage(image){
            this.productEdit.image=this.productEdit.image.filter((i)=>(
                i!=image
            ))
        },
        async update(){
            try{
                //start loading
                this.$loading(true)
                let formData=new FormData();
                for(let i=0; i<this.editImage.length;i++){
                        formData.append('pics[]',this.editImage[i]);
                    }
                for(let i=0;i<this.productEdit.image.length;i++){
                    formData.append('original_image[]',this.productEdit.image[i])
                }
                formData.set("category_id",this.productEdit.category_id)
                formData.set("brand_id",this.productEdit.brand_id)
                formData.set("name",this.productEdit.name);
                formData.set("price",this.productEdit.price);
                formData.set("size",this.productEdit.size);
                formData.set("color",this.productEdit.color);
                formData.set("description",this.productEdit.description)
                formData.append("_method","put")
                
                await axios.post('/admin/products/'+this.productEdit.id,formData);
                this.$router.push({name:"HomeProduct"})
                //end loading
                this.$loading(false)
                Toast.fire({
                    icon: 'success',
                    title: 'Product update Success'
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
        this.editProduct(this.$route.params.id)
        this.host=window.location.host;
    }
}
</script>

<style>
.previewContainer{
    display: inline-block;
    width: 150px;
    height: 150px;
    position: relative;
}
.previewContainer i{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    font-size: 18px;
    display: inline-block;
}

</style>