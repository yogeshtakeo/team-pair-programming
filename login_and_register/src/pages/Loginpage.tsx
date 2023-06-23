import React from 'react'

const Loginpage = () => {
  return (
    <div className=''>
      <h1> Frontend world </h1>
      <form>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button type='submit'> Log in</button>
      </form>
      <h3> OR</h3>
      <div>Login with gmail</div>
    </div>
  )

}

export default Loginpage