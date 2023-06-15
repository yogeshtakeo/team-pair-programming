import React from 'react'

const Card = (props) => {
  return (
    <div className={'${props.card1 && "bg-slate-600"}'}> {props.children} </div>
  )
}

export default Card