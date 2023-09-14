import React, { useRef, useState } from 'react'
import './signIn.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { server } from '../../utils/axios'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/authActions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const SignIn = () => {


  const dispatch = useDispatch()

  const [data, setData] = useState({
    email:"",
    password:"",
  })

  const handleChangeData = (e) => {
    setData((prevState) => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const handleSubmitData = async (e) => {
    e.preventDefault()
    const userData = {...data}
    const res = await server.post('/auth/in', userData)
    console.log(res);
    dispatch(login(res.data))
  }

  const handleSubmitGoogle = async (data) => {
    const userData = {...data}
    const res = await server.post('/auth/in', userData)
    console.log(res);
    dispatch(login(res.data))
  }


  ///////////////////////

  /* const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    handleSubmitData(data)
  } */

  return (
    <main className='signin-main'>
        <div className='signin-container'>
          <h2>Sign In</h2>

          <form onSubmit={handleSubmitData}>
            <div className='input-container'>
              <label>Email:</label>
              <input name='email' type="email"  value={data.email} onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>Password:</label>
              <input name='password' type="password"  value={data.password} onChange={handleChangeData}/>
            </div>

            <div className='signin-btn-container'>
              <button className='signin_btn' type="submit" >Sign In</button>
            </div>
          </form>

          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
              <label>Email:</label>
              <input name='email' type="email" {...register('email', {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })} />
              {errors.email?.type === 'pattern' && <p>Enter a valid email</p>}
            </div>

            <div className='input-container'>
              <label>Password:</label>
              <input name='password' type="password"  {...register('password',{
                required: true,
              })} />
            </div>

            <div className='signin-btn-container'>
              <button className='signin_btn' type="submit" >Sign In</button>
            </div>
          </form>
           */}


            <GoogleLogin
              onSuccess={credentialResponse =>{
                console.log(credentialResponse);
                const infoUser = jwtDecode(credentialResponse.credential);
                console.log(infoUser);
                handleSubmitGoogle({
                  email: infoUser.email,
                  name: infoUser.given_name,
                  lastName: infoUser.family_name,
                  password:"aA_123",
                  imageURL:"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
                  country:"Estados Unidos"
                })
              }}
              onError={() => {
                console.log('Login failed')
              }}
             />
            <Link to="/signup" >I don't have an acount</Link>
        </div>
    </main>
  )
}

export default SignIn


