import React from 'react'
//Child Components
const Button = (props) => {
  return (
    <button className={`ml-1 mt-1 ${props.primary && "bg-red-700 rounded-lg p-1 w-28"}   ${props.secondary && "p-1 border-2 border-solid border-black rounded-lg"}  ${props.tertiary && " w-7 ml-auto p-1 underline-offset-1 bg-red-500 shadow-md shadow-red-700 rounded-[50%] hover:scale-110 "}`}>
      {props.children}</button>
  )
}


export default Button