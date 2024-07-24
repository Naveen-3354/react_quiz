import React from 'react'
import "../css/register.scss"
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import useAuth from '../api/useAuth';
import { Link } from 'react-router-dom';
const Register = () => {
    const { handleChange, register} = useAuth()
    return (
        <div className="register">
            <div className="content">

                <h1>Welcome to QuizMaster!</h1>
                <p>Are you ready to challenge your knowledge and compete with others? Get started by registering below!</p>

            </div>
            <form action="" className='form' onSubmit={register}>
                <p>Sign Up</p>
                <div className="inputGroup">
                    <RiGraduationCapFill  className='icon' size="30px"/>
                    <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                </div>
                <div className="inputGroup">
                    <MdEmail className='icon' size="30px"/>
                    <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
                </div>
                <div className="inputGroup">
                    <FaUnlock className='icon' size="30px"/>
                    <input type="text" placeholder='Password' name='password' onChange={handleChange}/>
                </div>

                <button type='submit'>Create acount</button>
                <p>Already have an account? <span><Link to="/signin">Sign In</Link></span></p>
            </form>
        </div>
    )
}

export default Register