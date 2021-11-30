export default{
    state:{
        isAuthRoute:false
    },
    getters:{
        getisAuthRoute(state){
            return state.isAuthRoute
        }
    },
    actions:{
        setisAuthRoute({commit},value){
            commit("updateAuthRoute",value)
        }
    },
    mutations:{
        updateAuthRoute(state,value){
            state.isAuthRoute=value;
        }
    }
}