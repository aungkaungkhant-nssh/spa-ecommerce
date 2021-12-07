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
                                   <h6 class="text-center">Login</h6>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="errors && errors.length>0">
                            {{errors}}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" class="form-control" v-model="user.email">
                                <span v-if="errors.email" class="mt-1 text-danger">{{errors.email[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="user.password">
                                <span v-if="errors.password" class="mt-1 text-danger">{{errors.password[0]}}</span>
                            </div>
                            <input type="submit" class="btn btn-primary" value="login">
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
           
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return{
            errors:"",
            user:{  
                email:"",
                password:"",
            }
        }
    },
    computed:{ ...mapGetters(["getisAuthRoute"])
	},
    methods:{
        ...mapActions(["userAuth"]),
         async login(){
             try{
                 //loading start
                 this.$loading(true)
                 /// user login
                 await  axios.get('/sanctum/csrf-cookie')
                 await axios.post("/api/login",this.user);
                 //set user to vuex
                 this.userAuth();
                 //loading end
                 this.$loading(false)
                 this.$router.push("/");
             }catch(error){
                 //loading end
                  this.$loading(false)
                  if(error.response.status == 422)this.errors= error.response.data.errors;
             }
            
         },
        back(){
             this.$router.push('/')
             this.setisAuthRoute(false)
        }
    }
}
</script>

<style>

</style>