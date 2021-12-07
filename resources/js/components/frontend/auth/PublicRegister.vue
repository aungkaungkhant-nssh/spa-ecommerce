<template>
    <div class="container my-4">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">
                       <div class="row">
                           <div class="col-md-7 col-7">
                               <div class="d-flex justify-content-between align-items-center">
                                   <router-link to="/" >Back</router-link>
                                   <h6 class="text-center">Register</h6>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="form-group">
                                <label for="">Name</label>
                                <input type="text" class="form-control" v-model="user.name">
                                <span v-if="errors.name" class="mt-1 text-danger">{{errors.name[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" class="form-control" v-model="user.email">
                                <span v-if="errors.email" class="mt-1 text-danger">{{errors.email[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Phone</label>
                                <input type="number" class="form-control" v-model="user.phone">
                                <span v-if="errors.phone" class="mt-1 text-danger">{{errors.phone[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="user.password">
                                <span v-if="errors.password" class="mt-1 text-danger">{{errors.password[0]}}</span>
                            </div>
                             
                            <input type="submit" class="btn btn-primary">
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            errors:{},
            user:{
                name:"",
                email:"",
                phone:"",
                password:"",
            }
        }
    },
    methods:{
        ...mapActions(["userAuth"]),
        back(){
             this.$router.push('/')
        },
       async register(){
           try{
               //loading start
               this.$loading(true)
               /// user register
               await  axios.get('/sanctum/csrf-cookie')
               await axios.post("/api/register",this.user);
               //loading end
               this.$loading(false)
               this.$router.push("/login");
           }catch(error){
                  //loading end
               this.$loading(false)
               if(error.response.status == 422)this.errors= error.response.data.errors;
           }
             
        }
    }
}
</script>

<style>

</style>