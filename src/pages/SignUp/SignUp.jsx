import React, { useState } from 'react'
import './signUp.css'
import {server} from '../../utils/axios.js'

const SignUp = () => {

  const [data, setData] = useState({
    email:"",
    name:"",
    lastName:"",
    password:"",
    imageURL:"",
    country:"Estados Unidos"
  })

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value})
  }

  const handleSubmitData = async (e) => {
    e.preventDefault()
    const userData = {...data}
    const res = await server.post('/auth', userData)
    console.log(res);
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
                <option  value="Estados Unidos">Estados Unidos</option>
                <option value="Canadá">Canadá</option>
                <option value="México">México</option>
              </select>
            </div>
            <div>
              <button type="submit">Sing Up</button>
            </div>

          </form>
            <a href="#">I have an acount</a>
        </div>
    </main>
  )
}

export default SignUp