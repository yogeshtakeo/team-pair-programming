import React,{useState,ChangeEvent,FormEvent, ReactElement} from 'react'
import {useNavigate } from 'react-router-dom';


export default function RegisterPage() : ReactElement {
  
  
  const [password, setPassword] = useState({
    firstPassword: '',
    secondPassword: ''
  })
  
  const [match, setMatch] = useState(false)

  const inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    const { value, name } = event.target;
    setPassword({
      ...password,
      [name]: value
    })

  setMatch(!!password.firstPassword && password.firstPassword === password.secondPassword)
  }

  

  const navigate=useNavigate()
 
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    navigate("/LoginPage")
  }


  return (
    <div>
        <form className='flex flex-col m-10 p-4 gap-4 w-1/2 border-2 border-black' onSubmit={handleSubmit}>
            <p className='uppercase text-xl'>Create Your Account</p>
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="text" placeholder='Set a username' />
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="email" placeholder='Type your email' />
            <input onChange={inputChange} className='border-2 p-1 border-slate-500 rounded-lg' type="password" name='firstPassword' placeholder='Create password'  />
            <input onChange={inputChange} className='border-2 p-1 border-slate-500 rounded-lg' type="password" name='secondPassword' placeholder='Confirm password' />
            <button className='text-lg hover:underline decoration-blue p-1' type='submit'> Sign Up </button>
           
        </form>
        
    </div>
  )
}
