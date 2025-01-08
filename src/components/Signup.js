import React, { useState } from 'react'
import useSignup from '../hooks/useSignup'

const Signup = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, isLoading, error} = useSignup()

  const handleSignup = async(e) => {
    e.preventDefault()

    await signup(email,password)
    console.log(email, password);

    setEmail('')
    setPassword('')
  }
  return (
    <div>
    <h1>Sign Up Admin</h1>
      <form onSubmit={handleSignup}>
      
      <input type='text' name='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
      <input type='text' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      
      
      <select>
      <option value='female'>Female</option>
      <option value='male'>Male</option>
      <option value='null'>Prefer not say</option>
      </select>
    

    <button disabled={isLoading} type='submit'>SUBMIT</button>
      {error && <div className='error'>{error}</div>}
    </form>
    </div>
  )
}

export default Signup
