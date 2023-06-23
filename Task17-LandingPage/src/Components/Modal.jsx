import React, { useState } from 'react'
import App from '../App'
import Navbar from './Navbar'


function Modal(props) {

return (
  <>
  
    <div className='flex flex-col items-center justify-center bg-gray-300 border-solid border-gray-500 border-2 m-10 p-5 rounded-xl w-1/4 h-100'>
      
        <div className= "flex flex-col">
          <form>
            <p className='relative text-xl mb-4 '>LOGIN</p>
            
            <p className=' text-sm '>Username</p>
            <input type="textbox" placeholder='email@address.com' className=' rounded p-0.5'></input>

            <p className=' text-sm '>Password</p>
            <input type="password" placeholder='Password' className=' rounded p-0.5'></input>
            
            <div className='flex flex-row'>
              <input type="checkbox"></input>
              <p>Remember me</p>
            </div>
          </form>
          
          <button onClick={props.onClick} className=' text-sm text-white bg-blue-900 border-solid border-gray-800 hover:bg-slate-100 hover:text-slate-900 border-2 rounded p-1 mt-2 w-1/3'>Login</button>
         
        </div>    
    </div>
  </>

)
}

export default Modal