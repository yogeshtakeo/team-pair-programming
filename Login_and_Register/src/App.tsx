import React, { useState } from 'react'

import './App.css'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
      <RegisterPage/>
    </>
  )
}

export default App
