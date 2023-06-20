import Button from './Component/Button'
import Card from './Component/Card'
import './App.css'
import Form from './Component/Form'

function App() {

 

 return(
  <>
    
    <div className='m-10 flex items-center justify-center'>
      <Card className='border-solid border-4 border-black '>
        <div className='m-5 flex flex-col items-center justify-center '>
          <p className='font-semibold italic'>Card designed by Babisha and Junu.</p>
          <img src = "https://hips.hearstapps.com/hmg-prod/images/close-up-of-purple-flowering-plants-royalty-free-image-1674159474.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=980:*" height = "200px" width = "200" className='rounded-xl border border-2 4px'></img> 
        </div>
        
        <div className= "flex flex-col items-center justify-center m-10">
          <Form type="text" name="John"onChange={(e) => setUsername(e.target.value)}>Full Name : </Form>
          <Form type="text" name="Email Address" onChange={(e) => setEmailId(e.target.value)}>User Name </Form>
          <Form type="password" name="Password" onChange={(e) => setPassword(e.target.value)}>Password</Form>
          <Button type="submit" >Submit</Button>
        </div>
          
      </Card>
      
    </div>
    
  </>
 )
}

export default App
