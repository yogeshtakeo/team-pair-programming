import React,{useState} from 'react'
import { ChangeEvent} from 'react';
import {useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    
    
    const navigate=useNavigate()
    const location=useLocation()
    
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
  <div className='flex flex-col w-1/2 justify-center p-24 h-screen mx-auto bg-stone-300 m-12'>
    <h1 className='text-center text-2xl font-semibold mb-8'>Log In</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
           <label className='text-lg' htmlFor="email">Username</label>
           <input className='border-2 border-black rounded-md p-2 mb-8' type="email" id="email" value={email} onChange={handleEmail}/>
           <label className='text-lg' htmlFor='password'>Password</label>
           <input  className='border-2 border-black rounded-md p-2' type="password" id="password" value={password} onChange={handlePassword}/>
           <button className='border-2 border-black mt-8 rounded-md w-32 mx-auto p-1' type="submit">Log In</button>
           </form>
           
           {email}
    {password}
    
    </div>
   
    </>
  )
}

export default LoginPage