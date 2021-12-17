import PublicHome from '../components/frontend/PublicHome'
import BackEndLogin from '../components/backend/auth/BackendLogin'
import HomeAdmin from '../components/backend/admin/HomeAdmin'
import CreateAdmin from '../components/backend/admin/CreateAdmin'
import EditAdmin from '../components/backend/admin/EditAdmin'
import HomeCategory from '../components/backend/category/HomeCategory'
import CreateCategory from '../components/backend/category/CreateCategory'
import EditCategory from '../components/backend/category/EditCategory'
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
    { path: '*', component: NotFound }
  ]




