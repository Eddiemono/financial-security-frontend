import React, {  } from 'react'

import '../css/Dasboard.css'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {

  const navigate = useNavigate()

  return (
    <div className='dashboard'>
    <div className="dashboardContainer">

          
    <div className="dasboardNavs" onClick={() => navigate('/summary')> window.scrollTo(0,0) }>
        <h2>
          Admin Info
        </h2>
      </div>

      <div className="dasboardNavs" onClick={() => navigate('/all-trans')> window.scrollTo(0,0)}>
        <h2>
          Get All Transactions
        </h2>
      </div>
      
      {localStorage.getItem('user')?
        <div className="dasboardNavs" onClick={() => navigate('/create-acc')> window.scrollTo(0,0)}>
        <h2>
        Create Account
        </h2>
      </div>:<></>
      }

      <div className="dasboardNavs" onClick={() => navigate('/all-acc')> window.scrollTo(0,0)}>
        <h2>
        Get All Accounts
        </h2>
      </div>
              
      <div className="dasboardNavs" onClick={() => navigate('/#')> window.scrollTo(0,0)}>
        <h2>
        Update Account
        </h2>
      </div>
                    
      <div className="dasboardNavs" onClick={() => navigate('/#')> window.scrollTo(0,0)}>
        <h2>
          Delete Account
        </h2>
      </div>

    </div>
    </div>
  )
}

export default AdminDashboard
