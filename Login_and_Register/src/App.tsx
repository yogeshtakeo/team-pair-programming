import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import RegisterPage from './Components/RegisterPage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="LoginPage" element={<LoginPage/>}/>
      <Route path="HomePage" element={<HomePage/>}/>
      <Route path="RegisterPage" element={<RegisterPage/>}/>
      <Route index element={<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App
