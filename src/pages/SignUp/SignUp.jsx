import React, { useEffect, useState } from 'react'
import './signUp.css'
import {server} from '../../utils/axios.js'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/actions/authActions'
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [countries, setCountries] = useState([]);

  /*const getAllCountries = async () => {
    try {
      const res = await fetch('https://r5estcountries.com/v3.1/all')
      let c = await res.json()
      setCountries(c)
      //console.log(countries)
    } catch (error) {
      //console.log(error);
    }
    
  } */

  const dispatch = useDispatch();

  

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(response => response.json())
      .then(data => {
        const countr = data.map(country => country.name.common);
        //console.log(countr);
        setCountries(countr)

      });

      //console.log(countries);
    
  },[])


  const [data, setData] = useState({
    email:"",
    name:"",
    lastName:"",
    password:"",
    imageURL:"",
    country:"Estados Unidos"
  })

  const handleChangeData = (e) => {
    setData((prevState) => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const handleSubmitData = async (e) => {
    e.preventDefault()
    const userData = {...data}
    const res = await server.post('/auth/up', userData)
    console.log(res);
    dispatch(signup(res.data))
  }

  const handleSubmitGoogle = async (data) => {
    const userData = {...data}
    const res = await server.post('/auth/up', userData)
    console.log(res);
    dispatch(signup(res.data))
  }

  return (
    <main className='signup-main'>
        <div className='signup-container'>
          <h2>Sign up</h2>

          <form onSubmit={handleSubmitData}>
            <div className='input-container'>
              <label>Name:</label>
              <input name='name' type="text"  value={data.name}  onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>Last name:</label>
              <input name='lastName' type="text"  value={data.lastName} onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>Email:</label>
              <input name='email' type="email" value={data.email} onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>Password:</label>
              <input name='password' type="password" value={data.password} onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>URL image:</label>
              <input name='imageURL' type="text"  value={data.imageURL} onChange={handleChangeData}/>
            </div>
            <div className='input-container'>
              <label>Country:</label>
              <select defaultValue={data.country} name='country'  onChange={handleChangeData}>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className='signup-btn-container'>
              <button className='signup_btn' type="submit">Sing Up</button>
            </div>

          </form>
          
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
                //dispatch(login(res.data))
              }}
              onError={() => {
                console.log('Login failed')
              }}
             />
          
            {/* <div>
              <a href=''>Sing Up with Google</a>
            </div> */}
        <Link to="/signin" >I have an acount</Link>
        </div>
    </main>
  )
}

export default SignUp