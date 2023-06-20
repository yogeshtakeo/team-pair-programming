import React, { useState } from 'react'
import Button from './Button'
const Form = (props) => {
//updates the input by users
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
   
  <form  onSubmit={handleSubmit}>
    
    <input className= {` ${props.showButton &&'rounded-md w-64 h-9 pl-2 mt-2 mr-2'} ${props.checkbox && 'w-6 h-9 mt-6 mr-2 float-left'}`}
           type={props.type}
           placeholder={props.placeholder}
           value={input}
           onChange={handleChange}></input>
           {props.showButton ?(<Button primary={true} disabled={false} > Subscribe </Button>):('')}
           
           
           <div className='flex border-2 border-transparent items-center text-center mt-6 text-white text-lg'>
           
           {props.children}
           </div>
           
  </form>

  </>
  ) 
}

export default Form