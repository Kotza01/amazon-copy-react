import React from 'react'
import Home from './Home';
import Search from './Search';
import Category from './Category';
import Deliver from './Deliver';
import './Header.css';

const Header = ({countCart, goToHome}) => {
  return (
    <div className='header'>
        <Home countCart={countCart} goToHome={goToHome}/>
        <Search/>
        <Category />
        <Deliver/>
    </div>
  )
}

export default Header;