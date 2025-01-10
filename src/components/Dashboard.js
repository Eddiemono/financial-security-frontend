import { useNavigate } from 'react-router-dom'
import '../css/Dasboard.css'


const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className='dashboard'>
    <div className="dashboardContainer">
  
      <div className="dasboardNavs" onClick={() => navigate('/summary')> window.scrollTo(0,0)}>
        <h2>
        Account Summary
        </h2>
      </div>
              
      <div className="dasboardNavs" onClick={() => navigate('/deposit')> window.scrollTo(0,0)}>
        <h2>
          Deposit
        </h2>
      </div>
              
      <div className="dasboardNavs" onClick={() => navigate('/withdraw')> window.scrollTo(0,0)}>
        <h2>
        Withdrawal
        </h2>
      </div>
            
      <div className="dasboardNavs" onClick={() => navigate('/transfer')> window.scrollTo(0,0)}>
        <h2>
          Transfer
        </h2>
      </div>
            
      <div className="dasboardNavs" onClick={() => navigate('/history')> window.scrollTo(0,0)}>
        <h2>
          Account History
        </h2>
      </div>

      <div className="dasboardNavs" onClick={() => navigate('/#')> window.scrollTo(0,0)}>
        <h2>
          Our Contracts
        </h2>
      </div>
    </div>
    </div>
  )
}
              
export default Dashboard
