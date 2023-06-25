import React, { useState } from 'react'
import App from '../App'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Modal(props) {

  const [username, setUsername] = useState(" ");
  const [isClick, setIsClick]=useState(false)
  const notify = () => toast(` ${username}, Welcome to C.U.N.Y!`);

  const onInputTyped =(event) => {
    setUsername(event.target.value)
    console.log(event.target.value)
  }
 
return (
  <>
  
    <div className='flex flex-col items-center justify-center bg-gray-300 border-solid border-solid border-gray-400 border-2 border-2 m-10 p-5 rounded-xl w-1/4 h-100'>
     
        <div className= "flex flex-col">
          <form>
            
             <p className='text-xl mb-4 '>LOGIN</p>
             <div className='relative'>
             <button className='absolute right-0 bottom-5 px-1 border-solid border-gray-400 border-2 rounded-full text-xs bg-blue-900 text-white hover:bg-slate-100 hover:text-slate-900'>X</button>
            </div>
            <p className=' text-sm '>Username</p>
            <input type="textbox" placeholder='Username' className='border-solid border-gray-400 border-2 rounded p-0.5 ' onChange={onInputTyped}></input>

            <p className=' text-sm '>Password</p>
            <input type="password" placeholder='Password' className='border-solid border-gray-400 border-2 rounded p-0.5'></input>
            
            <div className='flex flex-row'>
              <input type="checkbox"></input>
              <p>Remember me</p>
            </div>
          </form>
          <div>
            <button onClick={notify} className=' text-sm text-white bg-blue-900 border-solid border-gray-400 hover:bg-slate-100 hover:text-slate-900 border-2 rounded p-1 mt-2 w-1/3'>Login</button>
            <ToastContainer/> 
          
          </div>
        </div>    
    </div>
  </>

)
}

export default Modal