import React from 'react'

const RefreshHomeProduct = ({clickProduct, id, name, url}) => {
  
  
  return (
          <div className='product' onClick={()=>clickProduct(id)} >
              <h6>{name}</h6>
              <img src={url} alt={name} />
          </div>
  )
}

export default RefreshHomeProduct;