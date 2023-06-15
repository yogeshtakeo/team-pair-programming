import { useState } from 'react'

import './App.css'
import Buttons from './Components/Buttons'
import Card from './Components/Card'
import Form from './Components/Form'
import LoginForm from './Components/LoginForm'
import Button from './Components/Buttons'

function App() {
 

  return (
    <>
    <div>
      <LoginForm btn1={"kabina ko button"}/>
      <Button primary={true}>Bdabaloo</Button>
      </div>
    </>
  )
}

export default App
