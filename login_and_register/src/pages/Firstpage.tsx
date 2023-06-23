import React from 'react'
import loginimage from '../assets/loginpage.png'

const Firstpage = ()=> {
  return (
    <>
    <div className='flex align-center justify-center'>
    <div className='h-96 w-96'>
      <img src={loginimage} />
    </div>
    <div className='flex flex-col align-center justify-center'>
      <h1> Frontend world </h1>
      <form className='flex flex-col'>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button type='submit'> Log in</button>
      </form>
      <h3> OR</h3>
      <div>Sign in with </div>
      <div>Don't have an account?
        <a href="Registerpage">Sign Up</a>
      </div>
    
    </div>
    </div>

    </>
  )
}
export default Firstpage

