import LoginPage from './components/Pages/Login'
import RegisterPage from './components/Pages/Register'
import HomePage from './components/Pages/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import React from 'react'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='"LoginPage' element={<LoginPage/>}/>
        <Route path='HomePage' element={<HomePage/>}/>
        <Route path='RegisterPage' element={<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App
