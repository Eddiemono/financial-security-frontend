import React, { useState } from 'react'
import useCustLogin from '../hooks/useCustLogin'

const CustLogin = () => {
  const [holderName, setHolderName] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const {loginCustomer, error, loading } = useCustLogin()

  const handleLogin = async(e) => {
    e.preventDefault()

    await loginCustomer(holderName, accountNo)
    console.log(holderName, accountNo);

    setHolderName('')
    setAccountNo('')

  }
  return (
    <div>
      <div>
    <h1>Log In Customer</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="holderName" value={holderName} placeholder="Name" onChange={(e) => setHolderName(e.target.value)}/>
        <input type="text" name="accountNo" value={accountNo} placeholder="Account No" onChange={(e) => setAccountNo(e.target.value)}/>
        <button type="submit" disabled={loading}>Submit</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
    </div>
  )
}

export default CustLogin
