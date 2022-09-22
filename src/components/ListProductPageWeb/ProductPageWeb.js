import React from 'react'

const ProductPageWeb = ({result, clickProduct}) => {
  return (
    <div className='web-list-product' onClick={()=> clickProduct(result.id)}>
        <div>
            <div className='web-list-img'>
                <img src={result.images[0]} alt={result.name}/>
            </div>
            <div className='web-list-text'>
                <div className='web-list-descrption'>
                    <span>{result.name} - {result.description}</span>
                </div>
                <div className='web-list-count'>
                    <span>75 Count (Pack of 3)</span>
                </div>
                <div className='web-list-star'>
                    <div className='product-item-header-star'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div><i className="bi bi-chevron-down"></i><span>106,66</span></div>
                </div>
                <div className='web-list-price price-style-one'>
                    <span>$</span>
                    <span>{result.price}</span>
                    <span>00</span>
                </div>
                <div className='web-list-brand'><span>Amazon Brand</span></div>
            </div>
        </div>
    </div>
  )
}

export default ProductPageWeb;