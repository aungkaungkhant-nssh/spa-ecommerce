
import PublicHome from '../components/frontend/PublicHome'
import PublicRegister from '../components/frontend/auth/PublicRegister'
import PublicLogin from '../components/frontend/auth/PublicLogin'
export const routes = [
    { path: '/', component: PublicHome },
    {path:"/register",component:PublicRegister},
    {path:"/login",component:PublicLogin}
  ]


