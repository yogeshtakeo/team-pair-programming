import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Firstpage from './pages/Firstpage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import Input from './component/Input'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Routes>
      <Route path="/first" element={<Firstpage/>}></Route>
      <Route path="/register" element={<Registerpage/>}></Route>
      <Route path="/login" element={<Loginpage/>}></Route>
      <Route path="/home" element={<Homepage/>}></Route>
     </Routes>
     

    </>
  )
}

export default App
