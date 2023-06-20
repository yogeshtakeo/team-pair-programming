import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Carousel from './assets/Components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Carousel/>
        
      </div>
      
    </>
  )
}

export default App
