import React,{useState} from 'react'
import {AiOutlineDownCircle} from 'react-icons/ai'

const HomePage = () => {
  
  return (
    <div className='bg-gradient-to-b from-gray-600  via-transparent to-gray-600 w-full h-screen' >
    <div className='flex flex-col justify-center items-center w-full h-screen bg-yellow bg-opacity-50'>
      <div className='w-24 h-24 rounded-full bg-emerald-500 shadow-xl shadow-emerald-600'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
       <div className=' absolute right-[55%] bottom-60 flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full bg-red-500 shadow-xl shadow-red-400'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className=' absolute right-[50%] bottom- flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full bg-yellow-500 shadow-xl shadow-yellow-600'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className=' absolute right-[39%] bottom-72 flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full shadow-xl shadow-purple-600 bg-purple-500'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <div className=' absolute right-[41%] bottom-60 flex flex-col items-center' >
       <div className='w-24 h-24 rounded-full bg-blue-500 shadow-xl shadow-blue-600'></div>
       <div className=' h-32 border-2 border-l-0 border-slate-200 mb-4'></div>
      </div>
      <h1 className='text-white text-4xl font-semibold'>Welcome!</h1>
      <button className='text-white  text-3xl mt-4 rounded-full'>Let's Get Started <AiOutlineDownCircle className='m-auto mt-4 hover:scale-110' size={45}/> </button>
    </div>
    </div>
  )
}

export default HomePage