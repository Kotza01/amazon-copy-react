import React from 'react'

const MerchandiseContentProduct = ({url, name}) => {
  return (
    <div className='merchandise-product'>
        <img src={url} alt={name}/>
        <h6>{name}</h6>
    </div>
  )
}

export default MerchandiseContentProduct;