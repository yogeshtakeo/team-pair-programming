import React from 'react'

const Child2 = (props) => {
  return (
    <div className='propss flex w-32 h-16 bg-slate-500 text-white justify-center p-5 mt-5'>{props.name}{props.age}</div>
  )
}

export default Child2