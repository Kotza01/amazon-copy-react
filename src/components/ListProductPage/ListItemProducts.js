import React from 'react'

const ListItemProducts = ({description, image, clickProduct, idProduct}) => {    
  
  return (
    <div className='list-item-products' onClick={()=>clickProduct(idProduct)}>
        <div>
            <div>
                <h6>Best Seller</h6>
            </div>
            <div>
                <img src={image} alt='productImage' />
            </div>
        </div>
        <div>
            <h6>{description}</h6>
            <h6>Alloy Steel</h6>
            <div>
            <div className='product-item-header-star'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                </div>
                <h6>55,152</h6>
            </div>
            <h6>Amazon Brands</h6>
        </div>
    </div>
  )
}

export default ListItemProducts;