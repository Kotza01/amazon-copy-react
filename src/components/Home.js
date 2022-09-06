import React from 'react';
import logo from '../assets/logo-3.png';

const Home = () => {
  return (
    <div className='header-container header-home' >
        <div className='header-item'>
          <i className="bi bi-list"></i>
          <img className='header-logo' src={logo} alt='logo' />
        </div>
        <div className='header-item'>
          <h6>Sing in</h6>
          <i class="bi bi-chevron-right"></i>
          <i class="bi bi-person"></i>
          <div className='header-cart'>
            <h6 className='item-cart'>0</h6>
            <i class="bi bi-cart"></i>
          </div>
        </div>
    </div>
  )
}

export default Home;