import React,{useState} from 'react'
import { ChangeEvent} from 'react';
import {useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    
    
    const navigate=useNavigate()
    const location=useLocation()//useLocation hook
    
    const handleEmail=(event:ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
     }
    const handlePassword=(event:ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value)
    }
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
       const confirmPassword=location?.state?.confirmPassword
       if(password===confirmPassword){
       
       navigate("/HomePage")}
       
       else{
        alert("You entered wrong password")
       }
       setEmail('')
       setPassword('')
        
      }

    
  return (
  <>
  <div className='bg-gradient-to-b from-gray-600  via-transparent to-gray-600 w-full h-screen p-1' >
   
    <form className='flex flex-col items-center w-96 h-96 p-4   mx-auto shadow-md shadow-stone-600 rounded-xl mt-20 bg-stone-400' onSubmit={handleSubmit}>
    <h1 className='uppercase text-center text-2xl font-semibold mb-8'>Log In</h1>
           <label className='text-lg mb-2 mr-auto pl-8' htmlFor="email">Email Address</label>
           <input className='border-2 rounded-md w-72 p-2 mb-8' type="email" id="email" value={email} onChange={handleEmail}/>
           <label className='text-lg mb-2  mr-auto pl-8' htmlFor='password'>Password</label>
           <input  className='border-2 rounded-md p-2 w-72' type="password" id="password" value={password} onChange={handlePassword}/>
           <button className=' mt-8 rounded-md w-32 mx-auto p-2 bg-stone-300 shadow-md shadow-stone-600 hover:scale-110 text-lg' type="submit">Log In</button>
           </form>
           
           {email}
    {password}
    
    </div>
   
    </>
  )
}

export default LoginPage