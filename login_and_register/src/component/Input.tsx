import React from 'react'
interface IProps {
  label: string,
  placeholder : string,
}
function Input({label, placeholder}:IProps) {
  return (
    <div className='flex flex-col'>
        <label>{label}</label>
        <input type='text' placeholder={placeholder}></input>
    </div>
  )
}

export default Input