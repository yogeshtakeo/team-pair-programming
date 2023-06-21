import React from 'react'
import { useState } from 'react'
import{BsFillPersonFill} from 'react-icons/bs'

function Modal() {
  //useState to handle the isOpen on onClick.
  const[isOpen, setIsOpen]=useState(false)
  //handleOpen function
  const handleOpen=()=>{
    setIsOpen(!isOpen) //states changes between true & false onClick.
  }

  return (
    <div>
<BsFillPersonFill size={25} onClick={handleOpen}/>
{isOpen?(
<div className='w-96 h-96 border-2 border-black m-auto'>

</div>
        ):
        (''

        )}

    </div>
  )
}

export default Modal