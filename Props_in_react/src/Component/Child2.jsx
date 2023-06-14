import React from 'react'

const Child2 = (props) => {
  return (
    <div className='propss flex flex-col h-16 bg-slate-500 text-white justify-center p-5 '>
       <h3>{props.name}</h3> 
       <h3>{props.age}</h3>
        </div>
  )
}

export default Child2