import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { baseUrl } from "../Urls"

const useSignup = () => {
  const {dispatch} = useAuthContext()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const signup = async(email, password) => {
    setIsLoading(true)
    setError(null)
    const formdata = {email, password}
  const response = await fetch(`${baseUrl}/api/user/signup`, {
    method: 'POST',
    headers:{
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata)
  })
  const data = await response.json()
  if(!response.ok){
    setIsLoading(false)
    setError(data.error)
  }
  if(response.ok){
    localStorage.setItem('user', JSON.stringify(data))
    dispatch({type: "LOGIN", payload: data})
    setIsLoading(false)
  }
  }
    return {signup, error, isLoading}
}

export default useSignup
