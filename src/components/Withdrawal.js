import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTransactionContext } from '../hooks/useTransactionsContext'
import '../css/Deposit.css'
import { baseUrl } from '../Urls'


const Withdrawal = () => {

  const {user} = useAuthContext()
  const {dispatch} = useTransactionContext()

const [accountNo, setAccountNo] = useState('')
const [amount, setAmount] = useState('')
const [error, setError] = useState(null)

  const handleClick = async(e) => {
    e.preventDefault()

    if(!user){
      setError('You must be logged in')
    }
    const tran = {accountNo, amount}
    const response = await fetch(`${baseUrl}/api/transaction/withdraw`,{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${await user.token}`,
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(tran)
    })
    const data = await response.json()
    if(!response.ok){
      setError(data.error)
    }
    if(response.ok){
      setAccountNo('')
      setAmount('')
      setError(null)
      console.log('Withdrawn successfully', [data])
      dispatch({type: "CREATE_TRANSACTIONS", payload: [data]})
    }
  }
  
  return (
    <div className='deposit'>
      <h2>Withdraw Funds</h2>
      <div className='deposit_container'>
        <label>Account No:
        <input type='text' placeholder='Account No' value={accountNo} onChange={(e) => setAccountNo(e.target.value)}/>
        </label>

        <label>Amount:
        <input type='text' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </label>

        <button onClick={handleClick}>Withdraw</button>
        {error && <div className='error'>{error}</div>} 
      </div>
    </div>
  )
}

export default Withdrawal
