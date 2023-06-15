import React from 'react'
import Button from './Button'
//import ak from './ak.jpg'

const Card = (props) => {
  return (
    <>
    {(props.img1)?
    <div className='w-96 mr-4 h-80 flex justify-center items-center flex-col p-2 text-sm bg-slate-200 border-solid rounded-lg '>
      <Button tertiary={true}>X</Button> 
       <div className= 'flex justify-center items-center rounded-xl w-72 h-full m-1 p-1 border-2 border-blue-400 border-solid bg-slate-200'>
       
       <img className='rounded-2xl h-full hover:scale-110' src={props.src} alt={props.name}/></div> 
        {props.children} </div>
         :(
        <div className='w-96 h-80 flex justify-center items-center flex-col p-2 text-sm bg-slate-200 border-solid rounded-lg '>
         <Button tertiary={true}>X</Button> 
         <div className= 'flex justify-center items-center rounded-xl w-72 h-full m-1 p-1 border-2 border-blue-400 border-solid bg-slate-200'>
          <img className='rounded-2xl h-full' src={props.src} alt={props.name}/></div> 
          {props.children} </div>
)}
          </>
      )
}

export default Card