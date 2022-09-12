import React from 'react'
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <div className='header-container header-category'>
      <div className='carrousel'>
        <h6><NavLink to={"/product"} >Deals</NavLink></h6>
        <h6>Amazon Basics</h6>
        <h6>Best Sellers</h6>
        <h6>Livestreams</h6>
        <h6>Video</h6>
        <h6>New Realeases</h6>
        <h6>Home</h6>
      </div>
    </div>
  )
}

export default Category;