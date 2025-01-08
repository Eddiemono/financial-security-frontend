import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import CustLogin from '../components/CustLogin'

const LoginSignup = () => {
  return (
    <div>
    <div style={{display: 'flex', justifyContent: "space-between"}}>
    <div>
    <Login/>
    </div>

    <div>
    <Signup/>
    </div>
      
    </div>
    <CustLogin />
    </div>
  )
}

export default LoginSignup
