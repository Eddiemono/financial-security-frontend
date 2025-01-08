import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

const useCustLogin = () => {
  const {dispatch} = useAuthContext()
  const [error, setError] = useState(null)
  const [lodading, setLoading] = useState(null)
  
  const loginCustomer = async(holderName, accountNo) => {
    setError(null)
    setLoading(true)
    const formdata = {holderName, accountNo}
    const response = await fetch(`http://localhost:3002/api/user/customer-log`,{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    })
    const data = await response.json()
    if(!response.ok){
      setLoading(false)
      setError(data.error)
    }
    if(response.ok){
      localStorage.setItem('customer', JSON.stringify(data))
      dispatch({type: "LOGIN", payload: data})
      setLoading(false)
      window.location.replace('/summary')
    }
  }
  return {loginCustomer, error, lodading}
}

export default useCustLogin
