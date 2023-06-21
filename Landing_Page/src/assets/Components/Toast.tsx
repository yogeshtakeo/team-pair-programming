import React,{ChangeEvent, useState} from 'react'
import {AiFillRobot, AiOutlineSend} from "react-icons/ai"
import { toast,ToastContainer } from 'react-toastify' //pre-built components for toast notification of 'react-toastify' library.
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
    //useState to handle isOpen on onClick
    const[isOpen, setIsOpen]=useState(false)
    const[show,setIsShow]=useState('')
    const[input, setInput]=useState('')
   
    //handleOpen function
    const handleOpen=()=>{
        setIsOpen(!isOpen)
      }
      const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
         setInput(event.target.value)
      }
      const handleClick=()=>{
        setIsShow(input)
        setInput('')
        toast.success('Your message was successfully sent.')
        
      }
     

  return (
    <div>
        <AiFillRobot size={35} onClick={handleOpen} className='cursor-pointer hover:scale-110' />
    {isOpen ?
     (<div className="absolute   backdrop-blur-2xl right-32 bottom-1  w-96 h-auto p-8 rounded-xl border-2 border-zinc-600 m-auto flex flex-col items-center justify-center">
       <h1 className='font-thin text-lg'>Hi !  How can I help you today?</h1>
       <input onChange={handleChange} value={input}
       className='rounded-md p-4 w-72 h-24 mt-4 text-black' type="text" placeholder="Ask me anything.....?"/>
       
       <AiOutlineSend className='absolute border-2  bg-zinc-700 p-1 rounded-full left-72 top-24 mt-4 hover:scale-110' size={30} onClick={handleClick}/>
       
    </div>):
    ('')}
    <ToastContainer className='mt-56 mr-48'/>
    </div>
  )
}

export default Toast