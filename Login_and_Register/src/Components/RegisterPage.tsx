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
//onChange event handling
  const handleUsername=(event:ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value)

  }
  const handlePassword=(event:ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
    
  }
  const handleEmail=(event:ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  }
  //
  const handleConfirm=(event:ChangeEvent<HTMLInputElement>)=>{
    setConfirm(event.target.value)
    setClicked(true)
  }
 
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    //reg expression
    const passwordFormat=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    if(!username||!email||!password||!confirm){
     setError('* Please input all fields')
    }
    else if(clicked && password!==confirm){
      setError("Password doesn't match")
    }
    else if(!passwordFormat.test(password)){
      setError('Invalid format')
    }
    else{
      setError('')
      //navigate to login page (routing)
      navigate("/LoginPage",{state:{confirmPassword:confirm}})
    }

    
  }
  return (
    <div className='bg-gradient-to-tl from-rose-300 to-orange-300 w-full h-screen' >
      <div className='outline1 w-full h-full p-1'>
        <form className='flex flex-col w-96 h-auto p-10 mx-auto shadow-xl shadow-orange-200 rounded-xl mt-3 bg-gradient-to-tl from-fuchsia-400 to-orange-400' onSubmit={handleSubmit}>
            <p className='uppercase text-2xl text-center font-medium mb-2'>------- Register -------</p>
            <p className='text-center mb-6'>Create your account. It's free and only takes a minute</p>
            <input className=' p-2  rounded-lg mb-6' type="text" placeholder='Full Name' onChange={handleUsername} />
           
            <input className=' p-2   rounded-lg mb-6' type="email" placeholder='Email Address'onChange={handleEmail} />
            {}
            <input  className='p-2  rounded-lg mb-6' type="password"  placeholder='Password' onChange={handlePassword} />
           
            <input className=' p-2  rounded-lg ' type="password"  placeholder='Confirm password' onChange={handleConfirm} />
            {error && <p className='text-red-600 mr-auto pl-8 mb-1'>{error}</p>}
            <p className='mt-2 text-center'>  <input type="checkbox"/> I accept the Terms of Use & Privacy Policy</p>
            <button className='text-lg font-semibold mt-4 bg-orange-300 rounded-xl shadow-md shadow-orange-400  hover:scale-105 p-2' type='submit'> Sign Up </button>
           
        </form>
        </div>

    </div>
  )
}
export default RegisterPage