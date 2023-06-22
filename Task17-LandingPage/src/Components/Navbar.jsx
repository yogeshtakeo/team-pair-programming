import React from 'react'

function Navbar(props) {
  return (
    <div>
      <nav>
        <a href = "" className="font-medium text-slate-700 px-6 rounded-lg hover:bg-slate-100 hover:text-slate-900">{props.children}</a>
      </nav>
      
    </div>
  )
}

export default Navbar