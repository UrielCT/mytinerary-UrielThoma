import Home from './pages/Home/Home'
import LayoutMain from './layouts/LayoutMain'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities/Cities'



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
