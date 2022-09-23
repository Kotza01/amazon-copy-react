import React from 'react'
import {NavLink} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Error from '../Error/Error';

const Category = ({handleIdCategory}) => {

  let url = "https://api.escuelajs.co/api/v1/categories";
  const {results ,error } = useFetch(url, 'category');
  
  return (
    <div className='header-container header-category'>
      <div className='carrousel'>
        {error && <Error error={error}/>}
        {results && results.map((el,index) => (
          <h6 key={index}><NavLink to={`/list-products/${el.id}`} >{el.name}</NavLink></h6>  
        ))}
      </div>
    </div>
  )
}

export default Category;