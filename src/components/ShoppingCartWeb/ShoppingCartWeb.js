import React from 'react'
import ProductPageWeb from '../ListProductPageWeb/ProductPageWeb'
import './ShoppingCartWeb.css';

const ShoppingCartWeb = ({productCart, deleteOne, deleteAll}) => {
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
            <div className='shopping-cart-web-items'>
                {productCart.cart.map((el,i) => (
                <div className='shopping-cart-web-item' key={i}>
                    <ProductPageWeb key={i} result={el} clickProduct={()=>{}}/>
                    <h6 className='count'>Count: {el.count}</h6>
                    <div className='buttons'>
                        <button onClick={() =>deleteOne(el.id)} >Delete One</button>
                        <button onClick={ ()=>{deleteAll(el.id)} } style={{backgroundColor: "#e67a00"}} >Delete All</button>
                    </div>
                </div>
                ))}
            </div>
    
        </div>
      )}
}

export default ShoppingCartWeb;