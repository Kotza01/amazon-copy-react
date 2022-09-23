import React from 'react'
import './Error.css';

const Error = ({error}) => {
  
  console.log(error);

  return (
    <div className='error'>
        <h3>Error: {error.response.status} {error.code}</h3>
        <i className="bi bi-exclamation-octagon-fill"></i>
    </div>
  )
}

export default Error;