import React from 'react'

const Registerpage = () => {
  return (
    <div>
        <h1>Frontend World</h1>
        <h6> Sign Up to emerge yourself in a digital world </h6>
        <button>Login with google</button>
        <div>OR</div>
        <div>
            <form>
                <input type='full name' placeholder='full name'/>
                <input type='email' placeholder='email'/>
                <input type='username' placeholder='username'/>
                <input type='password' placeholder='password'/>
            </form>
        </div>
        <div>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
        <button> Sign Up</button>

    </div>
  )
}

export default Registerpage