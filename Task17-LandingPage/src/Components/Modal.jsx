import React from 'react'



function Modal({props, e}) {

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
          <button className='button'>CLOSE</button>
        </div>


      
    </div>
  </>

)
}

export default Modal