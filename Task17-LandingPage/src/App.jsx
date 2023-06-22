import Navbar from './Components/Navbar'
import Modal from './Components/Modal'
import React from 'react'
function App() {
  
  return(
  <>
  <div className="flex justify-around space-x-4 bg-blue-200 py-5">
    <Navbar className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Navbar>
    <Navbar className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Services</Navbar>
    <Navbar className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Blogs</Navbar>
    <Navbar className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</Navbar>
    <Navbar className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sign-up</Navbar>
  </div>

    </>
  )
  
}

export default App
