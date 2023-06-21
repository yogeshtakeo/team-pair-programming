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
        <AiFillRobot size={35} onClick={handleOpen} />
    {isOpen ? (<div className=" absolute backdrop-blur-xl right-32 bottom-1  w-96 h-auto p-8 rounded-xl border-2 border-zinc-900 m-auto flex flex-col items-center justify-center">
       <h1>How can I help you today?</h1>
       <input onChange={handleChange} value={input}
       className='text-center rounded-md p-8 mt-4 text-black' type="text" placeholder="Ask me anything.....?"/>
       <AiOutlineSend className='mt-4' size={25} onClick={handleClick}/>
       
    </div>):('')}
    <ToastContainer className='mt-56 mr-48'/>
    </div>
  )
}

export default Toast