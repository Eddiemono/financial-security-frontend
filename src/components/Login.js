import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'


const Login = () => {
  const [email, setEmail] = useState()  
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    await login(email, password)
    console.log(email, password);
    
  
    setEmail('')
  setPassword('')
  // window.location.replace('/dashboard')
  }
  return (
    <div>
    <h1>Log In Admin</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' name='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
      <input type='text' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      
    <button disabled={isLoading} type='submit'>SUBMIT</button>
      {error && <div className='error'>{error}</div>}
    </form>
    </div>
  )
}

export default Login
