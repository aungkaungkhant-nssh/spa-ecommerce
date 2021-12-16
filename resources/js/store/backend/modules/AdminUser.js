import axios from "axios"

export default{
    state:{
        loginAdmin:{},
        adminUser:[],
        adminEdit:{}
    },
    getters:{
        loginAdmin(state){
            return state.loginAdmin
        },
        adminUser(state){
            return state.adminUser
        },
        adminEdit(state){
            return state.adminEdit
        }
    },
    mutations:{
        updateLoginAdmin(state,value){
            state.loginAdmin=value
        },
        updateAdminUser(state,value){
            state.adminUser=value;
        },
        updateAdminEdit(state,value){
            state.adminEdit=value
        },
        updateAdminDelete(state,id){
            state.adminUser=state.adminUser.filter((d)=>(d.id!==id));
        }
    },
    actions:{
       async getLoginAdmin({commit}){
           try{
                let res= await axios.get('/admin/login-admin')
                commit("updateLoginAdmin",res.data.data)
           }catch(error){
               console.log(error)
           }
       },
       async getAdminUser({commit}){
           try{
               let response=await axios.get('/admin/get-admin')
               setTimeout(() => {
                $("#datatable").DataTable({
                    lengthMenu: [
                      [5,10, 25, 50, -1],
                      [5,10, 25, 50, "All"],
                    ],
                    pageLength: 5,
                })    
               });
                commit("updateAdminUser",response.data.data)
           }catch(error){
               console.log(error)
           }
        },
        async editAdminUser({commit},id){
            try{
                let response= await axios.get(`/admin/edit-admin/${id}`)
                commit("updateAdminEdit",response.data.data)
            }catch(error){
                console.log(error)
            }
        },
        async updateAdminUser({commit},data){
            try{
                 await axios.put(`/admin/update-admin`,data)
                commit("updateAdminEdit",{})
            }catch(error){
                console.log(error)
            }
        },
        async deleteAdminUser({commit},id){
            try{
                await axios.delete(`/admin/delete-admin/${id}`);               
                commit("updateAdminDelete",id);
            }catch(error){
                console.log(error)
            }
        }
    }
}