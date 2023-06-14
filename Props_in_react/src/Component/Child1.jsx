
import React from 'react'



export const Child1 = (props) => {
   console.log(props)
  return (
    <div className='prop flex w-32 h-16 bg-black text-white justify-center p-5'>{props.name}{props.age}</div>
  )
}
