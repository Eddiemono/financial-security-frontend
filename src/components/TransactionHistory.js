import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTransactionContext } from '../hooks/useTransactionsContext'
import UserTransaction from './UserTransaction'
import { baseUrl } from '../Urls'



const TransactionHistory = () => {

  const {user} = useAuthContext()
  const {transactions, dispatch} = useTransactionContext()

  useEffect(() => {
  const trans = async() => {
    if(!user){
        return
      }
      const response =  await fetch(`${baseUrl}/api/transaction/transactions`,{
        headers:{
          'Authorization': `Bearer ${await user.token}`
          }
        })
        const data = await response.json()
        if(response.ok){
          dispatch({type:"SET_TRANSACTIONS", payload: data})
          
        }
        
          }
          if(user){
            trans()
          }
        },[dispatch, user])
          
      return (
        <div style={{textAlign: "center"}}>
      <h2>Transaction History</h2>
      <div>
      {
        transactions && transactions.map((transaction) => (
                <UserTransaction key={transaction._id} transaction={transaction}/>
              ))
              }
            
      </div>
        
    </div>
  )
}

export default TransactionHistory
