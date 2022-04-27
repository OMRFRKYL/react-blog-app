import { Avatar } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import blok from "../assets/blok.png"
import {createUser, signUpProvider} from '../helpers/firebase';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    createUser(email,password,navigate)
  };
  const handleProviderLogin = ()=>{
    signUpProvider(navigate)
  }
 
  return (
    <div className='d-flex justify-content-center' >
    <div className="register-form bg " >
    <Avatar
          alt="avatar_img"
          src={blok}
          sx={{ width: 100, height: 100 }}
          className="avatar"
        />
      <h1 className="form-title display-3">Register</h1>
      <form id='register' onSubmit={handleSubmit}>
        
        <div className='mb-3'>
        <label 
        htmlFor="email"
        className='form-label'>
        Email
        </label>
        <input
          type="email"
          className='form-control'
          id='email'
          placeholder='Enter your email adress..'
          onChange={(e)=>setEmail(e.target.value)}
          required />
           
        </div>
        <div className='mb-3'>
        <label 
        htmlFor="password"
        className='form-label'>
        Password
        </label>
        
        <input
          type="password"
          className='form-control'
          id='password'
          placeholder='Enter your password..'
          onChange={(e)=>setPassword(e.target.value)}
          required />
        </div>
        <input type="submit"
        className="btn btn-primary form-control"  
        value="Register"

       />
      </form>
      <button className='btn btn-primary form-control' onClick={handleProviderLogin}>Continue with Google</button>
     
    </div>
  </div>
  )
}

export default Register