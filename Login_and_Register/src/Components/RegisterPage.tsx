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
     setError('Please input all fields')
    }
    else if(clicked && password!==confirm){
      setError("Password doesn't match")
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
    <div className='bg-gradient-to-b from-gray-600  via-transparent to-gray-600 w-full h-screen' >
      <div className='w-full h-full bg-opacity-5 bg-yellow-500 p-1'>
        <form className='flex flex-col items-center w-96 h-auto p-4   mx-auto shadow-md shadow-stone-600 rounded-xl mt-20 bg-stone-400' onSubmit={handleSubmit}>
            <p className='uppercase text-xl text-center font-medium mb-8'>Register your Account</p>
            <input className='border-2 p-2 w-72 border-slate-500 rounded-lg mb-8' type="text" placeholder='Set a username' onChange={handleUsername} />
           
            <input className='border-2 p-2 w-72 border-slate-500 rounded-lg mb-8' type="email" placeholder='Type your email'onChange={handleEmail} />
            {}
            <input  className='border-2 p-2 w-72 border-slate-500 rounded-lg mb-8' type="password"  placeholder='Create password' onChange={handlePassword} />
           
            <input className='border-2 p-2 w-72 border-slate-500 rounded-lgmb-8' type="password"  placeholder='Confirm password' onChange={handleConfirm} />
            {error && <p className='text-red-600 mr-auto pl-8'>{error}</p>}
            <button className='text-lg mt-4 bg-stone-300 rounded-md shadow-md shadow-stone-600 w-32 p-2 hover:scale-110 ' type='submit'> Sign Up </button>
           
        </form>
        </div>
    </div>
  )
}
export default RegisterPage