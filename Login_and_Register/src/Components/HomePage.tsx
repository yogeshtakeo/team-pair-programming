import React,{useState} from 'react'
import {AiOutlineDownCircle} from 'react-icons/ai'

const HomePage = () => {
  
  return (
    <div className='outline w-full h-screen bg-gradient-to-t from-blue-800 to-blue-900' >

    <div className=' outline1 flex flex-col justify-center items-center w-full h-screen bg-opacity-50'>
      <div className='b absolute right-[30%] bottom-60 flex flex-col items-center'>
      <div className='w-24 h-24 rounded-full bg-emerald-500 shadow-xl shadow-emerald-600'></div>
      <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className='b1 absolute right-[55%] bottom-60 flex flex-col items-center' >
         <div className='w-24 h-24 rounded-full bg-red-500 shadow-xl shadow-red-400'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className='b2 absolute right-[65%] bottom- flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full bg-yellow-500 shadow-xl shadow-yellow-600'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className=' b3 absolute right-[48%] bottom-72 flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full shadow-xl shadow-purple-600 bg-purple-500'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className='b4 absolute right-[41%] bottom-60 flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full bg-blue-500 shadow-xl shadow-blue-600'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <h1 className='text-white text-4xl font-semibold'>Welcome!</h1>
      <button className='button text-white  text-3xl '>Let's Get Started <AiOutlineDownCircle className='glow m-auto mt-4 hover:scale-110 rounded-full' size={45}/> </button>
    </div>
    </div>
  )
}

export default HomePage