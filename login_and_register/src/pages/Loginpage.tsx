import React from 'react'
import { Link } from 'react-router-dom';

const Loginpage = () => {
  return (
    <div className=''>
      <h1>Login page </h1>
      <form>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button> <Link to="/home">Log in</Link></button>
      </form>
    </div>
  )

}

export default Loginpage