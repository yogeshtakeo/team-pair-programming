import { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const LoginPage = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    
    const navigate = useNavigate()
    const location = useLocation()

    function handleSubmit() {

        // event.preventDefault()
        const confirmPassword = location?.state?.confirmPassword 
        if(password === confirmPassword){
            navigate('/Home')
        }
    }
    return (
        <>
        <div>
           <form>
            <label htmlFor="email">EMAIL</label>
              <input type="email" value={username} placeholder="Full Name" onChange={(event)=>setUsername(event.target.value)} />
              <label htmlFor="password">PASSWORD</label>
              <input type="Password" value={password} placeholder="Enter Your Password" onChange={(event)=>setPassword(event.target.value)}/>
              <p><input type="checkbox"/>REMEMBER ME...</p>
              <button type="submit" onClick={handleSubmit}>LOG IN</button>

              <p>FORGOT PASSWORD?</p>
              <p>REGISTER FOR NEW ACCOUNT<Link to ='/RegisterPage'>SIGN UP</Link></p>

           </form>
                

        </div>
        
        </>
    )
    }


export default LoginPage