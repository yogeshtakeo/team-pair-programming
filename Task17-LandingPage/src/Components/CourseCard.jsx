import React from 'react'

function CourseCard ({children,heading,info,button}) {
  

    return (
      <>
        
        <div className='px-5 py-10 border-solid border-gray-400 border-2 rounded-xl bg-gradient-to-r from-indigo-300 my-10 mx-40'>
          <button className='flex flex-col'>
            <p className='text-xl font-bold' >{children}</p>
            <span className='text-xl font-semibold'>{heading}</span> 
            <span className='text-xl'>{info}</span>  
            <button className='border-slate-700 border-solid border-2 rounded mt-6 bg-black text-white p-1'>{button}</button>
          </button> 
        </div>
      
      </>
   
    )
  
  }
  export default CourseCard
  