import PublicHome from '../components/frontend/PublicHome'
import BackEndLogin from '../components/backend/auth/BackendLogin'
import HomeAdmin from '../components/backend/admin/HomeAdmin'
import CreateAdmin from '../components/backend/admin/CreateAdmin'
import EditAdmin from '../components/backend/admin/EditAdmin'
import HomeCategory from '../components/backend/category/HomeCategory'
import CreateCategory from '../components/backend/category/CreateCategory'
import EditCategory from '../components/backend/category/EditCategory'
import HomeProduct from '../components/backend/product/HomeProduct'
import CreateProduct from '../components/backend/product/CreateProduct'
import DetailProduct from '../components/backend/product/DetailProduct'
import EditProduct from '../components/backend/product/EditProduct'
import HomeBrand from '../components/backend/brand/HomeBrand'
import CreateBrand from '../components/backend/brand/CreateBrand'
import EditBrand from '../components/backend/brand/EditBrand'
import HomeCustomer from '../components/backend/customer/HomeCustomer'
import NotFound from '../components/404/NotFound'
export const routes = [
    { path: '/', component: PublicHome ,name:"Home"},
    {path:'/admin/login',component:BackEndLogin,name:"BackEndLogin"},
    { path: '/admin/admin-user', component: HomeAdmin ,name:"HomeAdmin"},
    { path: '/admin/admin-user/create',component:CreateAdmin,name:"CreateAdmin"},
    { path: '/admin/admin-user/edit/:id',component:EditAdmin,name:"EditAdmin"},
    ///category
    {path: '/admin/category',component:HomeCategory,name:"HomeCategory"},
    {path:'/admin/category/create',component:CreateCategory,name:"CreateCategory"},
    { path: '/admin/category/edit/:id',component:EditCategory,name:"EditCategory"},
    //brand
    {path:'/admin/brand',component:HomeBrand,name:"HomeBrand"},
    {path:'/admin/brand/create',component:CreateBrand,name:"CreateBrand"},
    { path: '/admin/brand/edit/:id',component:EditBrand,name:"EditBrand"},
    //product
    {path:"/admin/product",component:HomeProduct,name:"HomeProduct"},
    {path:"/admin/product/create",component:CreateProduct,name:"CreateProduct"},
    {path:"/admin/product/detail/:id",component:DetailProduct,name:"DetailProduct"},
    {path:'/admin/product/edit/:id',component:EditProduct,name:"EditProduct"},
    //customer
    {path:"/admin/customer",component:HomeCustomer,name:"HomeCustomer"},
    { path: '*', component: NotFound }
  ]




