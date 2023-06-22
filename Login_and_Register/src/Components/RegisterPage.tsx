import React from 'react'

export default function RegisterPage() {
  return (
    <div>
        <form className='flex flex-col m-10 p-4 gap-4 w-1/2 border-2 border-black'>
            <p className='uppercase text-xl'>Create Your Account</p>
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="text" placeholder='Set a username' />
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="email" placeholder='Type your email' />
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="password" placeholder='Create password' />
            <input className='border-2 p-1 border-slate-500 rounded-lg' type="password" placeholder='Confirm password' />
            <button className='text-lg hover:underline decoration-blue p-1  'type='submit'>Sign Up</button>

        </form>
    </div>
  )
}
