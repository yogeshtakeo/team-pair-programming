import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import{BsFillPersonFill} from 'react-icons/bs'


function Navbar() {
    //const [isOpen, setIsopen] = useState(false)
  return (
    <div className='fixed flex justify-between items-center w-full p-4  bg-black bg-opacity-50 text-white'>
      
        <ul>
            <li className="text-3xl">JS Business School</li>
        </ul>
        <ul className='flex gap-4 text-lg'>
            <li className='hover:border-2 rounded-lg pl-2 pr-2'>PROGRAMMES</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2'>ARTICLES & EVENTS</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2'>ABOUT US</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2'>BUSINESS INNOVATION</li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2'><AiOutlineSearch size={25}/></li>
            <li className='hover:border-2 rounded-lg pl-2 pr-2' ><BsFillPersonFill size={25}/></li>
        </ul>
        </div>
    
  )
}

export default Navbar