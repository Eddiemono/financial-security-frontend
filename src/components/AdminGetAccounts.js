//I used transactions context here instead of creating another context api for get account
import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTransactionContext } from '../hooks/useTransactionsContext'
import { baseUrl } from '../Urls'

const AdminGetAccounts = () => {
  const {user} = useAuthContext()
  const {dispatch, transactions} = useTransactionContext()

  useEffect(() => {
    const getAccounts = async() => {
      if(!user){
        return
      }
      const response = await fetch(`${baseUrl}/api/admin/get-acc`,{
        headers:{
          "Authorization": `bearer ${await user.token}`,
          "Access-Control-Allow-Origin": "*"
        }
      })
      const data = await response.json()
      if(response.ok){
        dispatch({type: "SET_TRANSACTIONS", payload: data})
      }
    }
    if(user){
      getAccounts()
    }
    
  }, [dispatch, user])
  return (
    <div>
      {transactions && transactions.map((account) => {
        return(
          <div style={{textAlign: "center"}}>
          <div>{account.holderName}</div>
          <p>{account.accountNo}</p>
          <p>{account.holderEmail}</p>
          <p>{account.balance}</p>
          <p>{account._id}</p>
          <hr/>
          </div>
          
        )
      })}
    </div>
  )
}

export default AdminGetAccounts
