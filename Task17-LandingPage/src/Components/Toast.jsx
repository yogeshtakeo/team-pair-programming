import React from 'react'





    
const LoginForm =() => {
    const [username, serUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
  
  }
   
  const handleSubmit =(event) => {
    alert('${username} is logged with password ${password}');
  
 
  return ( 
    <form>
      <input type="text" onChange={(event)=>setUsername(event.target.value)}></input>
      <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
    
  
  
  
    </form>
  
  )
  }
export default LoginForm