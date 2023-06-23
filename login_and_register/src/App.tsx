import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Firstpage from './pages/Firstpage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import Input from './component/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Input/>
     <Routes>
      <Route path="/firstPage" element={<Firstpage/>}></Route>
     </Routes>

    </>
  )
}

export default App
