import React from 'react'
import {NavLink} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Category = () => {

  let url = "https://api.escuelajs.co/api/v1/categories";
  const {results} = useFetch(url, 'category');
  console.log(results);
  
  return (
    <div className='header-container header-category'>
      <div className='carrousel'>
        {results && results.map((el,index) => (
          <h6 key={index}><NavLink to={`/list-products/${el.id}`} >{el.name}</NavLink></h6>  
        ))}
      </div>
    </div>
  )
}

export default Category;