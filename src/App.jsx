//import { useState } from 'react'
import Home from './pages/Home/Home'

//import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])


function App() {
  //const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>

    //<>
    //  <Home/>
    //  {/* <Carrousel/> */}
    // </>

  )
}

export default App
