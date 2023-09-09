import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import CitiesDetail from './pages/CitiesDetail/CitiesDetail'
import LayoutMain from './layouts/LayoutMain'
import LayoutRegister from './layouts/LayoutRegister/LayoutRegister'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



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
        element: <CitiesDetail/>
      },
    ]
  },
  {
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
  },
  {
    path: '*',
    element: <h3>la página no existe</h3>
  }
])




function App() {

  return (
    <RouterProvider router={router}/> 
  )
}

export default App
