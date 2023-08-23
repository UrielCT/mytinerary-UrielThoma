import Home from './pages/Home/Home'
import Cities from './pages/Cities/Cities'
import LayoutMain from './layouts/LayoutMain'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CitiesDetail from './pages/CitiesDetail/CitiesDetail'



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
        path: '/cities/detail',
        element: <CitiesDetail/>
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
