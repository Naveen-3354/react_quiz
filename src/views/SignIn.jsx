import React from 'react'
import "../css/register.scss"
import { MdEmail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import useAuth from '../api/useAuth';
import { Link } from 'react-router-dom';
const Login = () => {
    const { handleChange,login} = useAuth()
  return (
    <div className="register">
            <div className="content">

                <h1>Welcome Back to QuizMaster!</h1>
                <p>We’re excited to have you back. Sign in to continue your journey of fun and learning!</p>

            </div>
            <form className='form' onSubmit={login}>
                <p>Sign In</p>
                <div className="inputGroup">
                    <MdEmail className='icon' size="30px"/>
                    <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
                </div>
                <div className="inputGroup">
                    <FaUnlock className='icon' size="30px"/>
                    <input type="text" placeholder='Password' name='password' onChange={handleChange}/>
                </div>

                <button type='submit'>Sign In</button>
                <p>create an account<span><Link to="/signup">Sign Up</Link></span></p>
            </form>
        </div>
  )
}

export default Login