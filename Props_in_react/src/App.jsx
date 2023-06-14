import { useState } from 'react'
import './App.css'
import {Child1} from './Component/Child1'
import Child2 from './Component/Child2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='w-full h-96 p-4 bg-zinc-400 bg-gradient-to-t from-slate-200 to-slate-500 flex flex-col rounded-md  justify-center items-center m-10'>
       <h2 className='mb-4 font-semibold text-lg'>Team Members</h2>
       <h2 className='mb-4 font-medium'>Project#1</h2>
       <div className='flex'> 
        <Child1 name={'Name: Kabina Thapa'} 
        age={"Age: 24 yrs old"}> FWD </Child1>
      <Child2 name={'Name: Jharana Tamang'} 
      age={"Age: 26 yrs old"}> FWD30 </Child2> 
      </div>
      </div>
    </>
  )
}

export default App
