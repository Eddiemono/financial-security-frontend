import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

import '../css/Create-Acc.css'
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../Urls"

const CreateAcc = () => {

  const {user} = useAuthContext()

  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    balance: ''
  })

  const navigate = useNavigate()

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    }
        
      const createAcc = async(e) => {
        e.preventDefault();

        if(!user){
          return
        }

        console.log('Create Account Function clicked', formData);
        
        let responseData;
    
          await fetch(`${baseUrl}/api/admin/create-acc/`, {
            method: 'POST',
            headers:{
              accept: 'application/form-data',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(formData),
          }).then((response) => response.json())
        .then((data) => responseData = data)
          
        if(responseData.success){
          return responseData;
        }
        else{
          alert(responseData.error)
        }
      }

  return (
    <div className="create_account">
      <div className="flexi">
      <div className="form-Container">

      <h2>Create Account For Customer</h2>

        <form onSubmit={createAcc}>
          <label htmlFor="Name">Name:
          <input type="text" name="name" value={formData.name} placeholder="Enter Name" onChange={changeHandler}/>
          </label>
          <label htmlFor="Email">Email:
          <input type="email" name="email" value={formData.email} placeholder="Enter Email" onChange={changeHandler}/>
          </label>
          <label htmlFor="Balance">Balance:
          <input type="number" name="balance" value={formData.balance} placeholder="Balance" onChange={changeHandler}/>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateAcc;

