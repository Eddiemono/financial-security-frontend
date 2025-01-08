import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useTransactionContext } from "../hooks/useTransactionsContext"

import '../css/Deposit.css'
import { baseUrl } from "../Urls"


const Transfer = () => {
  const {dispatch} = useTransactionContext()
  const {user} = useAuthContext()

  const [accountNo, setAccountNo] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState(null)

  const handleClick = async(e) => {
    e.preventDefault()
    if(!user){
      setError('You must be logged in')
    }
    const tran = {amount, accountNo}
    const response = await fetch(`${baseUrl}/api/transaction/transfer`,{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type": "application/json",
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
      console.log('Amount transferred successfully', [data]);
      dispatch({type: "CREATE_TRANSACTIONS", payload: [data]})
    }
  }
  return (
    <div className="deposit">
      <h2>Transfer Funds</h2>
      <div className="deposit_container">
        <label>Account No:
          <input type="text" value={accountNo} placeholder="Account No" onChange={(e) => setAccountNo(e.target.value)}/>
        </label>

        <label>Amount:
          <input type="text" value={amount} placeholder="Account No" onChange={(e) => setAmount(e.target.value)}/>
        </label>
        <br/>
        <button onClick={handleClick}>Transfer</button>
        {error && (<div>{error}</div>)}
      </div>
    </div>
  )
}

export default Transfer
