
import HomeAdmin from '../components/backend/admin/HomeAdmin'
import CreateAdmin from '../components/backend/admin/CreateAdmin'
import EditAdmin from '../components/backend/admin/EditAdmin'
export const routes = [
    { path: '/admin/admin-user', component: HomeAdmin ,name:"HomeAdmin"},
    { path: '/admin/admin-user/create',component:CreateAdmin,name:"CreateAdmin"},
    { path: '/admin/admin-user/edit/:id',component:EditAdmin,name:"EditAdmin"}
  ]




