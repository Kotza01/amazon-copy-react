import React from 'react'
import MAEContentProduct from './MAEContentProduct';

const ExploreDepartementContent = () => {
  return (
    <div className='explore-department-content'>
        <h4>Explore Deparments</h4>
        <div className='explore-department-products'>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/71wBEshTCUL._SR540,200_.png" name="Beauty"/>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/61uornUdm-L._SR540,200_.png" name="Home and Kitchen"/>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/71sUjeGHWdL._SR540,200_.png" name="Sports And Outdoors"/>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/71JhsiGGjqL._SR540,200_.png" name="Electronics"/>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/71OooRMu+tL._SR540,200_.png" name="Outdoor Clothing"/>
            <MAEContentProduct styles="explore-department-product" url="https://m.media-amazon.com/images/I/7166hIvPMnL._SR540,200_.png" name="Pet Supplies"/>

        </div>
        <h6>All Deparments</h6>
        
    </div>
  )
}
/**
 * https://m.media-amazon.com/images/I/71wBEshTCUL._SR540,200_.png
 * https://m.media-amazon.com/images/I/61uornUdm-L._SR540,200_.png
 * https://m.media-amazon.com/images/I/71sUjeGHWdL._SR540,200_.png
 * https://m.media-amazon.com/images/I/71JhsiGGjqL._SR540,200_.png
 * https://m.media-amazon.com/images/I/71OooRMu+tL._SR540,200_.png
 * https://m.media-amazon.com/images/I/7166hIvPMnL._SR540,200_.png
 */
export default ExploreDepartementContent;