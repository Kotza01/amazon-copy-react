import React from 'react'

const MAEContentProduct = ({styles, url, name}) => {
  return (
    <div className={styles}>
        <img src={url} alt={name}/>
        <h6>{name}</h6>
    </div>
  )
}
export default MAEContentProduct;