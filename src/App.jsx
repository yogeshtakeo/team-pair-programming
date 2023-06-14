import './App.css'
import Button from './component/button/button.jsx'
import Input from './component/input/input.jsx'
import Title from './component/title/title.jsx'

function App() {



  return (
    <>
      <div class="header">
        {/* <h2 class='group'>Task 15 : Porps in React</h2> */}
        <Title>Task 15 : Porps in React</Title>
        <div class="group">
          <Input>search</Input>
          <Button>sign up</Button></div>
        
      </div>
      <div className='content'></div>

    </>
  )
}

export default App



