import './App.css'
import Button from './component/button/button.jsx'
import Input from './component/input/input.jsx'
import Title from './component/title/title.jsx'

function App() {



  return (
    <>
      <div class="header">
        <Title>Task 15 : Props in React</Title>
        <div class="group">
          <Input>search</Input>
          <Button>sign up</Button></div>
      </div>
      <div className='content'></div>
      <div className='content'>
          <Input>First Name</Input>
          <Input>Middle Name</Input>
          <Input>Last Name</Input>
          <Button>Submit</Button> 
      </div>

    </>
  )
}

export default App



