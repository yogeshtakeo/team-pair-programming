import React from 'react'

function Navbar(props) {
  return (
    <div className='flex flex-col bg-blue-200'>
    <div className="flex justify-center space-x-4">

        <nav>
            <a href = "" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{props.children}</a>
        </nav>
    </div>
    </div>
  )
}

export default Navbar