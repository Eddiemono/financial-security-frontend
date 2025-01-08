import React from 'react'
import { useTransactionContext } from '../hooks/useTransactionsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import '../css/userTrans.css'

const UserTransaction = ({transaction}) => {

  const {dispatch} = useTransactionContext()
  const {user} = useAuthContext()


  const handleClick = async() => {
      if(!user){
        return
      }

      const response = await fetch(`http://localhost:3002/api/transaction/${transaction._id}`,{
        method: "DELETE",
        headers:{
          "Authorization": `Bearer ${await user.token}`
          // 'Authorization': `Bearer ${localStorage.getItem('customer', user.token)}`
        }
      })
      const data = await response.json()
      if(response.ok){
        dispatch({type: "DELETE_TRANSACTIONS", payload: data})
      }
  }
  return (
    <div style={{}}>
    <div style={{textAlign: "center", marginTop: "20px"}}>
    <table style={{width: "100%"}}>
      <thead>
        <th>Date</th>    
        <th>Time</th>       
        <th>Amount</th>
        <th>Account No</th>
        <th>Transaction</th>
        <th>Delete Record</th>
      </thead>

      <tbody>
        <td>{transaction.date}</td>   
        <td>{transaction.time}</td>             
        <td>{transaction.amount}</td>
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
