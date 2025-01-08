import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTransactionContext } from '../hooks/useTransactionsContext'

import '../css/AdminTrans.css'


const AdminGetAllTrans = () => {
  const {user} = useAuthContext()
  const {dispatch, transactions} = useTransactionContext()

  useEffect(() => {
    const getAllTransactions = async() => {
      
      if(!user){
        return
      }
      const response = await fetch('http://localhost:3002/api/admin/get-trans', {
        headers:{
          "Authorization": `Bearer ${await user.token}`
        },
      })
      const data = await response.json()
      if(response.ok){
        dispatch({type: "SET_TRANSACTIONS", payload: data})
      }
    }
    if(user){
      getAllTransactions()
    }
  },[dispatch, user])
  
  
  return (
    <div className='transactions'>
      {transactions && transactions.map(trans => {
        return(
          <div className='transaction_items'>
          <div className='transaction_items'>
          <h2>Account No: {trans.accountNo}</h2></div>
          <h4>Trans Amount: {trans.amount}</h4>
          <h4>Trans Date: {trans.date}</h4>
          <h4>Trans Time: {trans.time}</h4>          
          
          </div>
        )
      })}
    </div>
  )
}

export default AdminGetAllTrans
