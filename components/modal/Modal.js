import React from 'react'

import './modal.styles.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className='my-modal'>
      <div className='modal-content'>
        {children}
        <span className='return' onClick={onClose}>ACCEPT</span>
      </div>
    </div>
  )
}

export default Modal
