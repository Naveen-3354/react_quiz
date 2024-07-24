import React, { useState , useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
const useAuth = () => {
    const navigate = useNavigate()
    const { setCurrentUser,currentUser } = useContext(AuthContext);
    const initialData = {
        "name": "",
        "email": "",
        "password": ""
    }
    const [userDetails, setDetails] = useState(initialData)
    const handleChange = (e)=>{
        setDetails({...userDetails,[e.target.name]:e.target.value})
    }

    const login =(e)=>{
        e.preventDefault()
        console.log(userDetails);
        console.log(currentUser);
        localStorage.setItem("user", JSON.stringify(userDetails))

        setCurrentUser(userDetails)
        navigate("/")
    }

    const register=(e)=>{
        e.preventDefault()
        console.log(userDetails);
    }

    const logout=(setActiveButton)=>{
        setActiveButton(0)
        localStorage.removeItem("user")
        navigate("/signin")
    }
    return {
        userDetails,handleChange,login,register,logout
    }
}

export default useAuth