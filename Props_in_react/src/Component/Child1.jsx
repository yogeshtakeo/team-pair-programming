
import React from 'react'



export const Child1 = (props) => {
   console.log(props)
  return (
    <div className='prop w-56 flex flex-col  h-16 bg-slate-300  rounded-md shadow-lg shadow-slate-500 justify-center  p-5 mr-5 mt-2'>
      <h3>{props.name}</h3> <h3>{props.age}</h3>
      </div>
  )
}
