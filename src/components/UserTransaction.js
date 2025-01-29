import React from 'react'
import { useTransactionContext } from '../hooks/useTransactionsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import '../css/userTrans.css'
import { baseUrl } from '../Urls'

const UserTransaction = ({transaction}) => {

  const {dispatch} = useTransactionContext()
  const {user} = useAuthContext()


  const handleClick = async() => {
      if(!user){
        return
      }

      const response = await fetch(`${baseUrl}/api/transaction/${transaction._id}`,{
        method: "DELETE",
        headers:{
          "Authorization": `Bearer ${await user.token}`,
          "Access-Control-Allow-Origin": "*"
        }
      })
      const data = await response.json()
      if(response.ok){
        dispatch({type: "DELETE_TRANSACTIONS", payload: data})
      }
  }
  return (
    <div className='transactionn'>
    <div style={{textAlign: "center", marginTop: "20px"}}>
    <table style={{width: "100%"}}>
      <thead>
        <th>Date</th>    
        <th>Time</th>       
        <th>Amount</th>
        <th>From Acc</th>
        <th>To Account</th>
        <th>Transaction</th>
        <th>Delete Record</th>
      </thead>

      <tbody>
        <td>{transaction.date}</td>   
        <td>{transaction.time}</td>             
        <td>{transaction.amount}</td>
        <td>{transaction.perior}</td>
        <td>{transaction.accountNo}</td>
        <td>{transaction.transType}</td>
        <td><button style={{background: "Red", color: "whitesmoke"}} onClick={handleClick}>Delete transaction</button></td>  
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default UserTransaction
