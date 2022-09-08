import React from 'react'

const RefreshHomeProduct = ({name, url}) => {
  
  
  return (
          <div className='product'>
              <h6>{name}</h6>
              <img src={url} alt={name} />
          </div>
  )
}

export default RefreshHomeProduct;