import axios from "axios"

export default{
    state:{
        customers:[],
    },
    getters:{
        customers(state){
            return state.customers
        }
    },
    mutations:{
        updateCustomers(state,value){
            state.customers=value;
        },
        updateCustomersDelete(state,id){
            state.customers=state.customers.filter((c)=>(c.id!=id));
        }
    },
    actions:{
        async getCustomers({commit}){
            try{
                let res= await axios.get('/admin/customers');
                setTimeout(() => {
                 $("#datatable").DataTable({
                     lengthMenu: [
                       [5,10, 25, 50, -1],
                       [5,10, 25, 50, "All"],
                     ],
                     pageLength: 5,
                 })    
                });
                commit('updateCustomers',res.data.data)
            }catch(error){
                console.log(error)
            }
          
        },
        async deleteCustomers({commit},id){
            try{
                await axios.delete(`/admin/customers/${id}`)
                commit("updateCustomersDelete",id);
            }catch(error){
                console.log(error)
            }
        }
    }
}