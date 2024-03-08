import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <>

    <div id='navbar'>
        <span className='Kalvium'><Link to="/">KALVIUM ❤️</Link></span>
        <span><Link to="/About">About</Link></span>
        <span><Link to="/Contact">Contact</Link></span>
    </div>

    </>
  )
}

export default Navbar