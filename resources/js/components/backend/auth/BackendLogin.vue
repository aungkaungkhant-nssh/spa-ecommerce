<template>
   <div class="container my-4">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">
                       <h5 class="text-center">Admin Login</h5>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger alert-dismissible fade show" role="alert"  v-if="errors && errors.length>0">
                              {{errors}}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="adminLogin">
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" class="form-control" v-model="admin.email" >
                                <span v-if="errors.email" class="mt-1 text-danger">{{errors.email[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="admin.password">
                                <span v-if="errors.email" class="mt-1 text-danger">{{errors.password[0]}}</span>
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
export default {
    data(){
        return{
            admin:{
                email:"",
                password:""
            },
            errors:""
        }
    },
    methods:{
       async adminLogin(){
           try{
               //start loading
                this.$loading(true)
                //admin login
                await axios.post("/admin/login",this.admin)
                //end loading
                this.$loading(false)
                this.$router.push("/admin/admin-user");
           }catch(error){
                //end loading
                this.$loading(false)
                this.errors= error.response.data.errors;
           }
    
        }
    }
}
</script>

<style>

</style>