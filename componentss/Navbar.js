import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
// import Logo from './images/291727_apple_logo_mobile_icon.png';
import './Navbar.css';
const Navbar = ()=> {
  const[click, setClick]=useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu=()=> setClick(false)
  return (
    <div className='header'>
        <nav className='navbar'>
            {/* <a href='/' className='logo'>
                <img src={Logo} alt='logo' /> 
            </a> */}
            <img className='image' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-512.png'></img>

            <div className='homeburger' onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{color:'#ffffff'}}/>)
                :(<FaBars size={30} style={{color:'#ffffff'}} />)}
              
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className='nav-item'>
                <a href='#home' onClick={closeMenu}>home</a>
              </li>
              <li className='nav-item'>
                <a href='#about' onClick={closeMenu}>about</a>
              </li>
              <li className='nav-item'>
                <a href='#tastimonials' onClick={closeMenu}>testimonials</a>
              </li>
              <li className='nav-item'>
                <a href='#demo' onClick={closeMenu}>demo</a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar