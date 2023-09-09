import React from 'react'
import { Outlet } from 'react-router-dom'
import './layoutRegister.css'

const LayoutRegister = () => {
  return (
    <div className='register-layout'>
        <header>
            <h1 className='register-title'>MyTinerary</h1>
        </header>
        <Outlet/>
    </div>
  )
}

export default LayoutRegister