import React,{useState} from 'react'
import { ChangeEvent} from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import{AiOutlineGoogle,AiOutlineClose} from 'react-icons/ai'
import{CiFacebook,CiLinkedin} from 'react-icons/ci'



const LoginPage = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[showModal, setShowModal] = useState(false)
  
    
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
        setShowModal(true)
         
       }
      
        
      }

      const closeModal = () => {
        setShowModal(false)
        setEmail('')
       setPassword('')
      }

    
  return (
  <>
  
  <div className='bg-gradient-to-tl from-rose-300 to-orange-300 w-full h-screen'>
    
  <div className='outline1 w-full h-screen p-1' >
   
   
    <form className='relative flex flex-col  w-96 h-auto p-10  mx-auto shadow-xl shadow-orange-200 rounded-xl mt-8 bg-gradient-to-tl from-fuchsia-400 to-orange-400' onSubmit={handleSubmit}>
   
    <h1 className='uppercase text-center text-2xl font-semibold '>LogIn</h1>
           <label className='text-lg mb-1 mr-auto' htmlFor="email">Email</label>
           <input className=' rounded-md  p-2 mb-5' type="email" id="email" value={email} onChange={handleEmail}/>
           <label className='text-lg mb-1  mr-auto' htmlFor='password'>Password</label>
           <input  className=' rounded-md p-2  mb-1' type="password" id="password" value={password} onChange={handlePassword}/>
           <p className='mr-auto'> <input type='checkbox'/> Remember me? </p>
           <button className=' font-semibold mt-5 mb-2 rounded-md p-2 bg-orange-300 shadow-md shadow-orange-400 hover:scale-105 text-lg' type="submit">Log In</button>
           
           <p className='ml-auto'>Forgot Password?</p>
           <p className='mx-auto mt-4 font-bold'>_______________OR_______________</p>
           <div className='flex justify-center text-center mt-2'>
           <AiOutlineGoogle className='pr-1' size={35}/>
           <CiFacebook className='pr-1' size={35}/>
           <CiLinkedin className='pr-1' size={35}/>
           </div>
           <p className='mx-auto mt-2 underline'>Need an Account? <Link to="/RegisterPage" > SIGN UP</Link></p>
</form>
{showModal?(
 <div className='absolute top-[1%] right-[34%] w-[32%]  h-24 rounded-md flex justify-center items-center text-lg  bg-rose-100'>
  You entered incorrect password. Please try again!
  <button className='mb-2' onClick={closeModal}><AiOutlineClose size={20} className='absolute top-[5%] right-2 mt-1  text-red-600 font-bold hover:scale-125'/></button>
 </div>):('')}
    </div>
    </div>

    </>
  )
}

export default LoginPage