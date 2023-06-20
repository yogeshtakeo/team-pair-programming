import React, {useState} from 'react'


function Navbar() {
    const [isOpen, setIsopen] = useState(false)
  return (
    <div className='flex justify-between w-full bg-black text-white'>
        <ul>
            <li>School LOGO</li>
        </ul>
        <ul className='flex gap-2'>
            <li className='pr-2'>PROGRAMMES</li>
            <li className='pr-2'>ARTICLES & EVENTS</li>
            <li className='pr-2'>ABOUT US</li>
            <li className='pr-2'>BUSINESS INNOVATION</li>
            <li className='pr-2'>Search Bar</li>
            <li className='pr-2 ' ><button>Icon</button></li>
        </ul>
    </div>
  )
}

export default Navbar