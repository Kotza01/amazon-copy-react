import React from 'react'
import ListItemProducts from '../ListProductPage/ListItemProducts';
import './ShoppingCart.css'

const ShoppingCart = ({productCart}) => {

  if(productCart.totalPrice ===0){
    return(
        <div className='shopping-cart-empty'>
            <h6>The Cart Its Empty </h6>
            <i className="bi bi-bag-x"></i>
        </div>
    )
  }else{
  return (
    <div className='shopping-cart'>
        <h6>Shopping Cart</h6>
        <div>
            <h6>Total Price: <span>{productCart.totalPrice}.00$</span></h6>
            <h6>Total Item: {productCart.count}</h6>
        </div>
        <div>
            <h6>List Item</h6>
            {productCart.cart.map((el,i) => (
            <div className='shopping-cart-item' key={i}>
                <ListItemProducts  description={el.description} idProduct={el.id} image={el.images[0]} clickProduct={()=>{}}/>
                <h6 className='count'>Count: {el.count}</h6>
                <div className='buttons'>
                    <button>Delete One</button>
                    <button style={{backgroundColor: "#e67a00"}} >Delete All</button>
                </div>
            </div>
            ))}
        </div>

    </div>
  )}
}

export default ShoppingCart;