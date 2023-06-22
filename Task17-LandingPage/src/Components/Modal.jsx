import React from 'react'



function Modal({props, e}) {

return (
  <>
    <div className='bg-gray-200'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            This is a Modal
          </h4>
        </div>
        <div className='modal-body'>
          I hope you got in!

        </div>
        <div className='modal-footer'>
          <button className='button'>CLOSE</button>
        </div>


      </div>
    </div>
  </>

)
}

export default Modal