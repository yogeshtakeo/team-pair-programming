import Button from './Component/Button'
import Card from './Component/Card'
import './App.css'

function App() {
 return(
  <>
    <div className= "flex items-center justify-center m-10">
    <Button>CLICK ME!</Button>
    <Button>CLICK 2!</Button>
    <Button>CLICK 3!</Button>
    </div>
    <div className='m-10 flex items-center justify-center'>
      <Card>
        <h2>Card By Babisha and Junu</h2>
        <p>Hi Everyone!!! This card is designed by Babisha and Junu.</p>
        <div className='m-5'>
        <img src = "https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-flowering-plants-royalty-free-image-1674159474.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*" height = "200px" width = "200" className='rounded-xl border- border-black border-2 4px'></img>
        </div>
      </Card>
    </div>
  </>
 )
}

export default App
