import { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const [errorEmailMessage, setErrorEmailMessage] = useState('')
import React from 'react'

const LoginPage = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [errorMessage, setErrorMessaage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const HandleEmail = () => {
        const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
        event.preventDefault();
        setErrorMessaage("Enter Your Email")
    } else if (!regExp.test(email)) {
        event.preventDefault();
        setErrorMessaage("Enter Valid Email")
    }
    
    
    };
    function handleSubmit() {

        // event.preventDefault()
        const confirmPassword = location?.state?.confirmPassword 
        if(password === confirmPassword){
            navigate('/Home')
        } else {
            setErrorMessaage("Please enter correct password")
        }
        HandleEmail();
    }
    return (
        <>
        <div>
           <form>
            <label htmlFor="email">EMAIL</label>
              <input type="email" value={email} placeholder="Full Name" onChange={(event)=>setEmail(event.target.value)} />
              <label htmlFor="password">PASSWORD</label>
              <input type="Password" value={password} placeholder="Enter Your Password" onChange={(event)=>setPassword(event.target.value)}/>
              {errorMessage && (<p className="text-red-400 mr-auto">{errorMessage}</p>)}
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