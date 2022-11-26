import React from 'react'
import logo from '../assets/logo1.svg'
import {Link, NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className='flex'>
            <img src={logo} alt="Logo" className='logo'/>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/View">About</NavLink></li>
                <li><NavLink to="/About">Contact</NavLink></li>
            </ul>
            <Link to="/Login" className='btn btn-light fw-bold px-4 py-2 align-self-center' style={{height: "fit-content",  }}>Login</Link>
        </nav>
    )
}

export default Navigation