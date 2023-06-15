import React from 'react'
//Child Components
const Button = (props) => {
  return (
    <button className={`ml-1 ${props.primary && "bg-blue-600 rounded-lg p-1 w-28"}   ${props.secondary && "p-1 border-2 border-solid border-black rounded-lg"}  ${props.tertiary && " p-2 underline-offset-1 bg-red-700 "}`}>{props.children}</button>
  )
}


export default Button