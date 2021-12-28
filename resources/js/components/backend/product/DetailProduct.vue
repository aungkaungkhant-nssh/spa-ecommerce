<template>
    <div class="card" v-if="product">
          <div class="card-header">
             <div class="row">
                <div class="col-md-5">
                    <router-link :to="{name:'HomeProduct'}" class="btn btn-outline-dark"><i class="fas fa-arrow-alt-circle-left"></i></router-link>
                </div>
                <div class="col-md-7">
                    <h4 class="mb-0">{{product.name}} Detail</h4>
                </div>
            </div>
        </div>
        <div class="card-body text-center">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <carousel v-if="product.image">
                                <img v-for="(image,index) in product.image" :key="index"  :src="'http://'+host+'/storage/images/'+image" alt="" style="width:150px;height:150px;padding-right:10px">
                        </carousel>
                    </div>
                </div>
              <div class="my-4 detail" >
                   <div class="mb-2">
                        <span>Name - </span>
                        <h6 class="text-muted d-inline">{{product.name}}</h6>
                   </div>
                    <div class="mb-2">
                        <span>Price - </span>
                        <h6 class="text-muted d-inline">{{ "$"+product.price }}</h6>
                   </div>
                   <div class="mb-2">
                       <span>Availabe Sizes:</span>
                       <h6 class="text-muted d-inline">{{ product.size && product.size.length==0 ? " - ": product.size}}</h6>
                   </div>
                    <div class="mb-2">
                       <span>Availabe Colors:</span>
                       <h6 class="text-muted d-inline">{{ product.color && product.color.length==0 ? " - ": product.color}}</h6>
                   </div>
                     <div class="mb-2">
                        <span>Description - </span>
                        <h6 class="text-muted d-inline">{{ product.description }}</h6>
                   </div>
              </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import carousel from 'vue-owl-carousel2'
export default {
    components: { carousel },
    data(){
        return {
            host:""
        }
    },
    methods:{
        ...mapActions(["getProduct"]),
    },
    computed:{
        ...mapGetters(["product"])
    },
    mounted(){
        this.getProduct(this.$route.params.id)
        this.host=window.location.host
    }
}
</script>

<style>
.detail{
    width:400px;
    margin: 0px auto;
}
</style>