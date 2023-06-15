import React from 'react'
//Child Components
const Button = (props) => {
  return (
    <button className={`ml-1 ${props.primary && "bg-slate-600"}   ${props.secondary && "bg-green-500"}`}>{props.children}</button>
  )
}


export default Button