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
                        <form action="">
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control">
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
    created(){
        this.setisAuthRoute(true)
    },
    computed:{  ...mapGetters(["getisAuthRoute"])
	},
    methods:{
        ...mapActions(["setisAuthRoute"]),
        back(){
             this.$router.push('/')
             this.setisAuthRoute(false)
        }
    }
}
</script>

<style>

</style>