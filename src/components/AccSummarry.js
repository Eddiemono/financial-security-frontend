import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import '../css/Summary.css'
import { Link } from 'react-router-dom'

const AccSummarry = () => {
  const {user} = useAuthContext()
  console.log(user.user.email);
  console.log(user.user.holderName);
  
  return (
    <div className='summary'>
    <div className='flexi'>
    <div className='summary_container'>
      <div className='name'>
      {  user && (
        <div>Holder: <span style={{fontWeight: "bold"}}>{user.user.email || user.user.holderName}</span></div>
        )} 
    </div>
    <div className='account'>
    {localStorage.getItem('customer')?<p>Account No: <span style={{fontWeight: "bold"}}>{user.user.accountNo}</span></p>
    :<p>Account Role: <span style={{fontWeight: "bold"}}>{user.user.role}</span></p>}
    </div>

    <div className='balance'>
    {localStorage.getItem('customer')?<p>Account Balance: <span style={{fontWeight: "bold"}}>USD($) {user.user.balance}.00</span></p>
    :<></>}
    </div>
    <div>
      <p>Status:<span style={{color: "green", fontWeight:"bold"}}> Active</span></p>
    </div>
    <Link to={'/dashboard'}>Back to Dashboard</Link>
    </div>
    <div className='rightSide'>
      <p>Hello</p>
    </div>
    </div>
    </div>
    
  )
}

export default AccSummarry
