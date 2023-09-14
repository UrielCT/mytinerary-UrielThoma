import React from 'react'
import NavbarMain from '../components/Navbar/NavbarMain'
import Footer from '../components/Footer/Footer'
import { Link, Outlet } from 'react-router-dom'
import './layoutMain.css'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/actions/authActions'

const LayoutMain = () => {

  const {user, status} = useSelector(store => store.authReducer)

  console.log(user)
  const dispatch = useDispatch()

  function logout() {
    dispatch(signOut())
  }

  return (
    <div className='app-layout'>

      <header className='app-header'>
        <h1>MyTinerary</h1>

        <NavbarMain/>
          

        <div className='btns-login-container'> 

          {
            status === 'offline' ?
            <>
              <Link className='main-btn-login' to={'/signin'}>
                <i className="fa-solid fa-user"></i>
                <span>Log in</span>
              </Link>
              <Link className='main-btn-signup' to={'/signup'}>
                <span>Sign up</span>
              </Link>
            </> : <></>
            
          }
          
          
          

          {
              user?.imageURL &&
            <img className='header-user-image' src={user.imageURL} alt="profile image" onClick={logout} /> 
          }
        </div>
        
      </header>

      
      <Outlet/>
      
      
      <Footer/>

    </div>
  )
}

export default LayoutMain
