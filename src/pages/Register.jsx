import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const[inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })


const handleChange = e =>{
  setInputs(prev =>({...prev,[e.target.name]:e.target.value}))

}
console.log(inputs)

const handleSubmit = async e =>{
  e.preventDefault()
  const res = axios.post("/auth/register", inputs )

}
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register