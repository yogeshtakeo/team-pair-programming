import { useState } from 'react'
import './App.css'
import {Child1} from './Component/Child1'
import Child2 from './Component/Child2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='w-full h-96 p-4 bg-zinc-500 flex flex-col justify-center items-center m-10'>
       <h2>Team Members</h2>
       <div className='flex'> 
        <Child1 name={'Name: Kabina '} 
        age={"Age: 24"}> FWD </Child1>
      <Child2 name={'name: Jharana '} 
      age={"age: 26"}> FWD30 </Child2> 
      </div>
      </div>
    </>
  )
}

export default App
