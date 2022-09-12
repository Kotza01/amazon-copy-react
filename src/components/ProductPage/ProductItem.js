import React from 'react'
import Slider from './Slider';
import Deliver from '../Header/Deliver'

const ProductItem = ({results}) => {
  return (
    <div className='product-item'>
        <div className='product-item-header'>
            <h6>Visit de Amazon Renewed Store</h6>
            <div>
                <div className='product-item-header-star'>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                </div>
                <h6>2</h6>
            </div>
        </div>
        <div className='product-item-description'>
            <h6>{results.description}</h6>
        </div>
        {<Slider images={results.images} />}
        <div className='product-item-details'>
            <div><h6 className='detail'>Was:</h6> <h6 className='price'>${results.price}.00</h6> <h6 className='detail'>Details</h6></div>
            <div><h6 className='detail'>Price:</h6> <h6 className='price'>${results.price-30}.00</h6></div>
            <div><h6 className='detail'>You Save:</h6> <h6 className='price'>${30}.00 ({(30*100/results.price).toFixed()}%)</h6></div>
            <h6>This item cannot be shipped to your selected delivery location. Please choose a different delivery location.</h6>
        </div>
        {<Deliver/>}
    </div>
  )
}

export default ProductItem;