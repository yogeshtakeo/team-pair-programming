import { useState } from 'react'
// import {Routes, Route} from "react-router-dom"
import Firstpage from './pages/Firstpage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Firstpage/>
     
    </>
  )
}

export default App
