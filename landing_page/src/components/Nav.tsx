import React from 'react'

function Nav() {
  return (
    <> 
    <div className='flex bg-red-200'> 
        <h1 className=' text-blue-600 bg-red-200 '> Frontend School</h1>
        <ul className='inline'>
            <li> <a href="About Us">About Us</a></li>
            <li> <a href="Faculty">Faculty</a></li>
            <li> <a href="Courses">Courses</a></li>
            <li> <a href="Academic">Academics</a></li>
        </ul>
    </div>
    
    </> 
  )
}

export default Nav