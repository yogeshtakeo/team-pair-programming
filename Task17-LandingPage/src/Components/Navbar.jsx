import React from 'react'

function Navbar(props) {
  return (
    <div onClick={props.onClick}>
      <nav className="{font-medium  text-slate-700 px-6 rounded-lg hover:bg-slate-100 hover:text-slate-900}">{props.children}
      </nav>
      
    </div>
  )
}

export default Navbar