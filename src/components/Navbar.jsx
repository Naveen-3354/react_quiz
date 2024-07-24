import React, {useState} from 'react'
import "../css/dashboard.scss"
import { Link } from 'react-router-dom'

const Navbar = ({ activeButton,handleButtonClick }) => {

    return (
        <div id='Navbar'>
            <h4>{activeButton}</h4>
            <div className="profile">
                <div className="image"></div>
                <p onClick={()=>handleButtonClick(4)}><Link to="/profile">Profile</Link></p>
            </div>
        </div>
    )
}

export default Navbar