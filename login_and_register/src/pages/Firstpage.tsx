import React from 'react'

const Firstpage = ()=> {
  return (
    <>
    <div>
    <div>
      <img src="https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHdvcmxkJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
    <div>
      <h1> Frontend world </h1>
      <form>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button type='submit'> Log in</button>
      </form>
      <h3> OR</h3>
      <div>Login with gmail</div>
      <div>Don't have an account?
        <a href="Registerpage">Sign Up</a>
      </div>
    
    </div>
    </div>

    </>
  )
}
export default Firstpage

