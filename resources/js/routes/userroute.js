
import PublicHome from '../components/frontend/PublicHome'
import PublicRegister from '../components/frontend/auth/PublicRegister'
import PublicLogin from '../components/frontend/auth/PublicLogin'
export const routes = [
    { path: '/', component: PublicHome ,name:"Home"},
    {path:"/register",component:PublicRegister,name:"Register"},
    {path:"/login",component:PublicLogin,name:"Login"}
  ]


