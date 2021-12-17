import axios from "axios"

export default{
    state:{
       categories:[],
       categoriesEdit:{}
    },
    getters:{
        categories(state){
            return state.categories
        },
        categoriesEdit(state){
            return state.categoriesEdit
        }
    },
    mutations:{
        updateCategories(state,value){
            state.categories=value
        },
        updateCategoryEdit(state,value){
            state.categoriesEdit=value
        },
        updateCategoryDelete(state,id){
            state.categories=state.categories.filter((d)=>(d.id!==id));
        }
    },
    actions:{
       async getCategories({commit}){
           try{
               let res=await axios.get('/admin/categories');
               setTimeout(() => {
                $("#datatable").DataTable({
                    lengthMenu: [
                      [5,10, 25, 50, -1],
                      [5,10, 25, 50, "All"],
                    ],
                    pageLength: 5,
                })    
               });
               commit("updateCategories",res.data.data)
           }catch(error){
                console.log(error)
           }
       },
       async editCategory({commit},id){
        try{
            let response= await axios.get(`/admin/categories/${id}/edit`)
            commit("updateCategoryEdit",response.data.data)
        }catch(error){
            console.log(error)
        }
        },
        async updateCategory({commit},data){
            try{
                let res= await axios.put(`/admin/categories/${data.id}`,data)
                console.log(res)
                return;
                commit("updateAdminEdit",{})
            }catch(error){
                console.log(error)
            }
        },
        async deleteCategory({commit},id){
            try{
                await axios.delete(`/admin/categories/${id}`);               
                commit("updateCategoryDelete",id);
            }catch(error){
                console.log(error)
            }
        }
    }
}