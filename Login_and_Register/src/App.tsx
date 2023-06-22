import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import './App.css'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="HomePage" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
