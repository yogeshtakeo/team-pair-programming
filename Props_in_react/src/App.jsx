import { useState } from 'react'
import './App.css'
import {Child1} from './Component/Child1'
import Child2 from './Component/Child2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Child1 name={'Kabina'} age={24}> FWD </Child1>
      <Child2 name={'Jharana'} age={26}> FWD30 </Child2> 
    </>
  )
}

export default App
