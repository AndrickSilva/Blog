import React from 'react'
import logo from '../assets/Logo1.svg'
import {Link, NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className='flex'>
            <Link to="/"><img src={logo} alt="Logo" className='logo'/></Link>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/Blog">Blogs</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <Link to="/Login" className='btn btn-light fw-bold px-4 py-2 align-self-center' style={{height: "fit-content",  }}>Login</Link>
        </nav>
    )
}

export default Navigation