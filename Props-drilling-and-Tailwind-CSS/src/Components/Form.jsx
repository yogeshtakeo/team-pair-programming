import React, { useState } from 'react'

const Form = (props) => {
//updates the input bu users
  const[input, setInput]=useState('')
  //updates the submit 
  const[submit, setSubmit]=useState('')
  //onChange event handler
  const handleChange=(event)=>{
   setInput(event.target.value)
  }
   //onSubmit event handler
   const handleSubmit=(event)=>{
    event.preventDefault()
    setSubmit(input)
     setInput('')
    }
  
  return (
    <>
  <form onSubmit={handleSubmit}>  
    <label>
      <input type={props.type}
             placeholder={props.placeholder}
              value={input}
              onChange={handleChange}></input>
    </label>
    {props.children}
  </form>
  <p>{submit}</p>
  </>
  ) 
}

export default Form