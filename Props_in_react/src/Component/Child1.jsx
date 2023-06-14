
import React from 'react'



export const Child1 = (props) => {
   console.log(props)
  return (
    <div className='prop flex flex-col  h-16 bg-black text-white justify-center p-5 mr-5'>
      <h3>{props.name}</h3> <h3>{props.age}</h3>
      </div>
  )
}
