import React,{useState,ChangeEvent,FormEvent, ReactElement} from 'react'
import {useNavigate } from 'react-router-dom';
const RegisterPage = () => {
  const navigate=useNavigate()
  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')
  const[email, setEmail]=useState('')
  const[confirm, setConfirm]=useState('')
  const [error, setError]=useState('')
  const[clicked, setClicked]=useState(false)

  const handleUsername=(event:ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value)

  }
  const handlePassword=(event:ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
    
  }
  const handleEmail=(event:ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  }
  const handleConfirm=(event:ChangeEvent<HTMLInputElement>)=>{
    setConfirm(event.target.value)
    setClicked(true)
  }
 
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const passwordFormat=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    if(!username||!email||!password||!confirm){
     setError('input all fields')
    }
    else if(clicked && password!==confirm){
      setError("password doesn't match")
    }
    else if(!passwordFormat.test(password)){
      setError('Invalid format')
    }
    else{
      setError('')
      
      navigate("/LoginPage",{state:{confirmPassword:confirm}})
    }

    
  }
  return (
    <div>
        <form className='flex flex-col m-10 p-4 gap-4 w-1/2 border-2 border-black' onSubmit={handleSubmit}>
            <p className='uppercase text-xl'> Create Your Account </p>
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="text" placeholder='Set a username' onChange={handleUsername} />
           
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="email" placeholder='Type your email'onChange={handleEmail} />
            {}
            <input  className='border-2 p-1 border-slate-500 rounded-lg' type="password"  placeholder='Create password' onChange={handlePassword} />
            {error && <p>{error}</p>}
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="password"  placeholder='Confirm password' onChange={handleConfirm} />
            {error && <p>{error}</p>}
            <button className='text-lg hover:underline decoration-blue p-1' type='submit'> Sign Up </button>
           
        </form>
        
    </div>
  )
}
export default RegisterPage