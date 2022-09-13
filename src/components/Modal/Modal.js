import React from 'react'
import './Modal.css';

const Modal = ({closeModal}) => {
  return (
    <div className='general-modal'>
        <div className='general-modal-container'>
            <h5>Your petition was successfully!!!</h5>
            <button onClick={closeModal} >OK</button>
        </div>
    </div>
  )
}

export default Modal;