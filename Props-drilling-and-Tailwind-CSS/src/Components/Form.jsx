import React, { useState } from 'react'
import Button from './Button'
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
    <input type={props.type}
           placeholder={props.placeholder}
           value={input}
           onChange={handleChange}></input>
           {props.showButton ?<Button primary={true}>Subscribe</Button>:('')}
             {props.children}
  </form>
  
  </>
  ) 
}

export default Form