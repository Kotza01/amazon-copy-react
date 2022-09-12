import React, { useState } from 'react'

const ShopButton = () => {

  const [modalClick, setModalClick] = useState(false);
  const [countCart, setCountCart] = useState(1);

  const handleCountCart = (event) => {
    setCountCart(parseInt(event.target.textContent) );
  }

  const handleModal = (e) =>{
    
    if(modalClick){
      setModalClick(false);  
    } else {
      setModalClick(true);
    }
  }

  return (
    <div className='shop-button'>
        <h4>Only 17 left in stock - order soon.</h4>
        <div onClick={handleModal}>
          <h6>Qty: {countCart}</h6>
          <i className="bi bi-chevron-down"></i>
        </div>
        {modalClick && <div className='shop-modal' onClick={(e) => handleModal(e)} >
          <div className='shop-modal-container'>
            <div onClick={handleModal}>
              <h6>Qty:</h6>
              <i className="bi bi-x"></i>
            </div>
            <div>
              {Array.from({length: 10}).map((el,index) => 
              (
                <h6 key={index} className={countCart===index+1 ? 'modal-clicked' : ''} onClick={(e) => handleCountCart(e)}>{index+1}</h6>  
              ))}
            </div>
          </div>
        </div>}
        <button>Add to Cart</button>
        <button style={{backgroundColor:"#ffa41c"}}>Buy Now</button>
        <div className='shop-button-security'>
          <i className="bi bi-lock-fill"></i>
          <h6>Secure transaction</h6>
        </div>
        <div>
          <h6>Ships From</h6>
          <h6 style={{color:"#000"}}>Tech Venture</h6>
          <h6>Sold By</h6>
          <h6>Tech Ventures</h6>
        </div>
    </div>
  )
}

export default ShopButton;