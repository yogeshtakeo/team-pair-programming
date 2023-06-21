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
    {isOpen ? (<div className="w-[50%] h-32 rounded-xl border-2 border-black m-auto flex flex-col items-center justify-center">
       <h1>How can I help you today?</h1>
       <input className='text-center' type="text" placeholder="Ask me anything.....?"/>
    </div>):('')}
    </div>
  )
}

export default Toast