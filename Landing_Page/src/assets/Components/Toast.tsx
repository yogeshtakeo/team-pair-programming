import React,{useState} from 'react'
import {AiFillRobot} from "react-icons/ai"

const Toast = () => {
    //useState to handle isOpen on onClick
    const[isOpen, setIsOpen]=useState(false)
    //handleOpen function
    const handleOpen=()=>{
        setIsOpen(!isOpen)

    }

  return (
    <div className=''>
        <AiFillRobot size={35} onClick={handleOpen} />
    {isOpen ? (<div className=" absolute backdrop-blur-xl right-32 bottom-1  w-96 h-auto p-8 rounded-xl border-2 border-zinc-900 m-auto flex flex-col items-center justify-center">
       <h1>How can I help you today?</h1>
       <input className='text-center rounded-md p-8 mt-2 text-black' type="text" placeholder="Ask me anything.....?"/>
    </div>):('')}
    </div>
  )
}

export default Toast