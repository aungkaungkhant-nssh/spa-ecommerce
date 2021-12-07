import axios from "axios";

export default{
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        getAuthenticated(state){
            return state.authenticated;
        },
        getUser(state){
            return state.user;
        }
    },
    mutations:{
        updateUser(state,value){
            state.user=value;
        },
        updateAuthenticated(state,value){
            state.authenticated=value
        }
    },
    actions:{
        async userAuth({commit}){
            try{
                let response= await axios.get('/api/user')
                commit('updateUser',response)
                commit("updateAuthenticated",true)   
                localStorage.setItem("authenticated",true);    
            }catch(error){
                commit('updateUser',{});
                commit("updateAuthenticated",false)
            }
       
        },
        userLogout({commit}){
            localStorage.removeItem("authenticated")
            commit("updateUser",{})
            commit("updateAuthenticated",false)
        }
    }
}