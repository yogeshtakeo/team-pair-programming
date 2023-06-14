
import React from 'react'



export const Child1 = (props) => {
   console.log(props)
  return (
    <div>{props.name}{props.age}</div>
  )
}
