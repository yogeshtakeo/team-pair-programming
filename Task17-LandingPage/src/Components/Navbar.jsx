import React from 'react'

function Navbar(props) {
  return (
    <div className='flex flex-col bg-blue-200'>
        <nav>
            <a href = "">{props.children}</a>
        </nav>
    </div>
  )
}

export default Navbar