import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import '../css/Navbar.css'

const Navbar = () => {

  const navRef = useRef()

  const {user} = useAuthContext()
  const {logout} = useLogout()

  const handleLogout = () => {
    logout()
  }
  
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
    console.log('show nav items');
    
  }

  return (
    <div className='navbar'>
    <header className='header'>

    <div className='container'>

    <div>
    <div className='mobile-top-header'>
    <Link to='/'><h1>Rainbows Financial Security</h1></Link>
    </div>
      
      
      
      <div className='mobile-container'>
      
      <div className='mid-container'>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Contact</Link>

        {user?<Link to='/dashboard'>Dashboard</Link>:<Link to='/login-signup'>Login</Link>}
      
      </div>

      {user?<h3>Welcome! {user.user.email || user.user.holderName}</h3>:<h3>Better Banking that profits you</h3>}
      </div>
      </div>

        {/* I add showNavbar function on the nav items div below so that when I click on a link the dropdown goes away */}
      <div className='nav-items' onClick={showNavbar}>
        <nav ref={navRef}>
        <div className='mobile-display'>
        <h2>Rainbows Finacial Security</h2>
        <h3>Better Banking That Rewards You</h3>
        </div>
        

      {user && (<div>
        <Link to='/dashboard'>Dashboard</Link> 
      </div>)}

      {localStorage.getItem('user')?<Link to='/admin'>Admin Dasboard</Link>
      :<></>
      }

      {!user && (<div>
        <Link to='/login-signup'>Login</Link>
      </div>)}
      
      
        <Link to='/'>Home</Link>
          
          {user && (<div>
        <h3>{user.user.email || user.user.holderName}</h3>
      </div>)}

      {user && (<div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>)}

        {/* <button className='nav-btn nav-close-btn' onClick={showNavbar}>X</button> */}
      </nav>
        </div>

      </div>
      <button className='nav-btn' onClick={showNavbar}>=</button>

      </header>
    </div>
  )
}

export default Navbar
