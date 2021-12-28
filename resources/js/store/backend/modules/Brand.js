import axios from "axios"

export default{
    state:{
       brands:[],
       brandsEdit:{}
    },
    getters:{
        brands(state){
            return state.brands
        },
        brandsEdit(state){
            return state.brandsEdit
        }
    },
    mutations:{
        updateBrands(state,value){
            state.brands=value
        },
        updateBrandEdit(state,value){
            state.brandsEdit=value
        },
        updateBrandDelete(state,id){
            state.brands=state.brands.filter((d)=>(d.id!==id));
        }
    },
    actions:{
       async getBrands({commit}){
           try{
               let res=await axios.get('/admin/brands');
               setTimeout(() => {
                $("#datatable").DataTable({
                    lengthMenu: [
                      [5,10, 25, 50, -1],
                      [5,10, 25, 50, "All"],
                    ],
                    pageLength: 5,
                })    
               });
               commit("updateBrands",res.data.data)
           }catch(error){
                console.log(error)
           }
       },
       async editBrand({commit},id){
        try{
            let response= await axios.get(`/admin/brands/${id}/edit`)
            commit("updateBrandEdit",response.data.data)
        }catch(error){
            console.log(error)
        }
        },
        async updateBrand({commit},data){
            try{
                 await axios.put(`/admin/brands/${data.id}`,data)
                commit("updateAdminEdit",{})
            }catch(error){
                console.log(error)
            }
        },
        async deleteBrand({commit},id){
            try{
                await axios.delete(`/admin/brands/${id}`);               
                commit("updateBrandDelete",id);
            }catch(error){
                console.log(error)
            }
        }
    }
}