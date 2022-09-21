import React, { useState } from 'react';
import logo from '../../assets/logo-3.png';
import Nav from './Nav';
import {useNavigate} from 'react-router-dom'

const Home = ({countCart, goToHome}) => {

  const [selectNav, setSelectNav] = useState("");
  const slideIn = 'slide-in';
  const slideOut = 'slide-out';
  const navigate = useNavigate();

  const toggleNav =()=>{
    if(selectNav===slideIn) {
      setSelectNav(slideOut);
    } else {
      setSelectNav(slideIn);
    }
  }

  const goToShoppingCart = () => {
    navigate('/shopping-cart');
  }

  return (
    <div className='header-container header-home' >
        {<Nav  toggleNav={toggleNav} selectNav={selectNav} />}
        <div className='header-item'>
          <i onClick={toggleNav} className="bi bi-list"></i>
          <img onClick={goToHome} className='header-logo' src={logo} alt='logo' />
        </div>
        <div className='header-item'>
          <h6>Sing in</h6>
          <i className="bi bi-chevron-right"></i>
          <i className="bi bi-person"></i>
          <div className='header-cart' onClick={goToShoppingCart}>
            <h6 className='item-cart'>{countCart}</h6>
            <i className="bi bi-cart"></i>
          </div>
        </div>
    </div>
  )
}

export default Home;