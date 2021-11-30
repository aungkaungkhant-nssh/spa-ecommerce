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
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" class="form-control" v-model="user.email">
                            </div>
                            <div class="form-group">
                                <label for="">Phone</label>
                                <input type="number" class="form-control" v-model="user.phone">
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="user.password">
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

export default {
    data(){
        return{
            user:{
                name:"",
                email:"",
                phone:"",
                password:""
            }
        }
    },
    methods:{
        back(){
             this.$router.push('/')
        },
        register(){
            axios.post('register',this.user)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>console.log(error))
        }
    }
}
</script>

<style>

</style>