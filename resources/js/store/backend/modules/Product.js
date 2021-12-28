import axios from "axios"

export default{
    state:{
       products:[],
       product:{},
       productEdit:{},
       previewImage:[],
    },
    getters:{
        products(state){
            return state.products
        },
        product(state){
            return state.product
        },
        productEdit(state){
            return state.productEdit
        },
        previewImage(state){
            return state.previewImage
        }
    },
    mutations:{
        updateProducts(state,value){
            state.products=value;
        },
        updateProduct(state,value){
            state.product=value
        },
        updateEditProduct(state,value){
            state.productEdit=value
        },
        updatePreviewImage(state,value){
            state.previewImage=value;
        },
        deleteUpdateProduct(state,id){
            state.products=state.products.filter((p)=>(p.id!==id));
        }
    },
    actions:{
        async getProducts({commit}){
            try{
                let res=await axios.get('/admin/products');
                 
                setTimeout(() => {
                 $("#datatable").DataTable({
                     lengthMenu: [
                       [5,10, 25, 50, -1],
                       [5,10, 25, 50, "All"],
                     ],
                     "columnDefs": [
                        {"className": "dt-center", "targets": "_all"}
                     ],
                    
                     pageLength: 5,
                 })    
                });
                commit("updateProducts",res.data.data)
            }catch(error){
                 console.log(error)
            }
        },
        async getProduct({commit},id){
            try{
                let res=await axios.get(`/admin/products/${id}`)
                commit("updateProduct",res.data.data)
            }catch(error){
                 console.log(error)
            }
        },
        async editProduct({commit},id){
            try{
                let res=await axios.get(`/admin/products/${id}/edit`)
                commit("updateEditProduct",res.data.data)
                commit("updatePreviewImage",res.data.data.image)
            }catch(error){
                console.log(error)
            }
        },
        async deleteProduct({commit},id){
            try{
                await axios.delete(`/admin/products/${id}`)
                commit("deleteUpdateProduct",id)
            }catch(error){
                console.log(error)
            }
        }
    }
}