import Button from './Component/Button'
import Card from './Component/Card'
import './App.css'
import Form from './Component/Form'

function App() {
 return(
  <>
    
    <div className='m-10 flex items-center justify-center'>
      <Card>
        
        <p>Card designed by Babisha and Junu.</p>
        <div className='m-5 flex items-center justify-center'>
        <img src = "https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-flowering-plants-royalty-free-image-1674159474.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*" height = "200px" width = "200" className='rounded-xl border- border-black border-2 4px'></img>
        
        </div>
        
        
      
        <div className= "flex items-center justify-center m-10">
          <Button>CLICK ME!</Button>
          <Button>CLICK 2!</Button>
          <Button>CLICK 3!</Button>
        </div>
        <Form type="text" name="John">Full Name : </Form>
        <Form type="text" name="Email Address">User Name </Form>
        <Form type="password" name="Password">Password</Form>

      </Card>
      
    </div>
    
  </>
 )
}

export default App
