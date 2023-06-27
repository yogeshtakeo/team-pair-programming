import { useState } from "react"

const LoginPage = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = (event) =>{
        (event =>setUsername(event.target.value))
    }

    const handlePassword = (event) => {
        (event =>setPassword(event.target.value))
    }

    return (
        <>
        <div>
           <form>
              <input type="email" value={username} placeholder="Full Name" onChange={handleSubmit} />
              <input type="Password" value={password} placeholder="Enter Your Password" onChange={handlePassword}/>

           </form>


        </div>
        
        </>
    )
    }


export default LoginPage