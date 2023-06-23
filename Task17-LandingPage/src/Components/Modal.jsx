import React, { useState } from 'react'
import App from '../App'
import Navbar from './Navbar'


function Modal(props) {

return (
  <>
  
    <div className='inline-block bg-gray-200 border-solid border-gray-500 border-2 m-10 p-5'>
      
        <div className= "p-2">
          <h4 className='modal-title'>
            This is a Modal
          </h4>
        </div>
        <div className= "p-2">
          I hope you got in!

        </div>
        <div className= "p-2">
          <button onClick={props.onClick}>CLOSE</button>
        </div>    
    </div>
  </>

)
}

export default Modal