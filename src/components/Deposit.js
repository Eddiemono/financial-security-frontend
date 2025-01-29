import { useState } from "react"
import { useTransactionContext } from "../hooks/useTransactionsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import '../css/Deposit.css'
import { baseUrl } from "../Urls"

const Deposit = () => {

  const {dispatch} = useTransactionContext()
  const {user} = useAuthContext()

  const [accountNo, setAccountNo] = useState('') 
  const [amount, SetAmount] = useState('')
  const [error, setError] = useState(null)

    const deposit = async(e) => {
    e.preventDefault()

    if(!user){
      setError('You must be logged in')
    }

    const tran = {accountNo, amount}
    
    const response = await fetch(`${baseUrl}/api/transaction/deposit`, {
      method: 'POST',
      headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${await user.token}`,
              "Access-Control-Allow-Origin": "*"
      },
        body: JSON.stringify(tran),
      })
      const data = await response.json()
      if(!response.ok) {
        setError(data.error)
      }

      if(response.ok){
        setAccountNo('')
        SetAmount('')
        setError(null)
        console.log('New transaction added', [data])
        dispatch({type: 'CREATE_TRANSACTIONS', payload: [data]})
      }
    
  }

  return (
    <div className="deposit">
      <h2>Deposit Funds</h2>
      <div className="deposit_container">
      <form onSubmit={deposit}>
      <h4>Acc No: {user.user.accountNo}</h4>
        <label htmlFor="accountNo">Your Account Number:
          <input type="number" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} /> 
        </label>
                <br/>
        <label htmlFor="amount"> Deposit Amount:
          <input type="number" value={amount} onChange={(e) => SetAmount(e.target.value)}/> 
        </label>
        <button type="submit">Deposit</button>
        {error && <div className='error'>{error}</div>} 
        </form>
      </div>
      
    </div>
  )
}

export default Deposit
