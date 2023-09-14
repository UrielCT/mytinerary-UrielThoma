import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import CitiesDetail from './pages/CitiesDetail/CitiesDetail'
import LayoutMain from './layouts/LayoutMain'
import LayoutRegister from './layouts/LayoutRegister/LayoutRegister'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { server } from './utils/axios'
import { useDispatch } from 'react-redux'
import { authenticate, login } from './redux/actions/authActions.js'
import ProtectedRouter from './layouts/ProtectedRouter'



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cities',
        element: <Cities/>
      },
      {
        path: '/cities/:id',
        element: 
        <ProtectedRouter statusToNotProtect='online'>
          <CitiesDetail/>
        </ProtectedRouter>
      },
      {
        path: '/signin',
        element:
        <ProtectedRouter statusToNotProtect='offline'>
          <SignIn/>
        </ProtectedRouter>
      },
      {
        path: '/signup',
        element: 
        <ProtectedRouter statusToNotProtect='offline'>
          <SignUp/>
        </ProtectedRouter>
      },
    ]
  },
  /* {
    path: '/',
    element: <LayoutRegister/>,
    children:[
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
    ]
  }, */
  {
    path: '*',
    element: <h3>la página no existe</h3>
  }
])




function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate())
  },[])

  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);

      const infoUser = jwtDecode(credentialResponse.credential);

      const userData = {
        email: infoUser.email,
        password: "aA_123"
      }

      const res = await server.post('/auth/in', userData)
      console.log(res);
      dispatch(login(res.data))
    },
    oneError: () => {
      console.log('Login failed');
    }
  })

  

  return (
    <RouterProvider router={router}/> 
  )
}

export default App
