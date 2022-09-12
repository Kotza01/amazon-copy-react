import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import ProductItem from './ProductItem';
import './ProductPage.css';
import ShopButton from './ShopButton';
import Sponsored from './Sponsored';

const ProductPage = ({id}) => {
  let url = `https://api.escuelajs.co/api/v1/products/${id}`;
  
  const {results} = useFetch(url);
  console.log(results);

  if(results===undefined || Object.hasOwn(results,'error')) {
    return (
      <div className='product-page'>
    </div>
    )
  }

  return (
    <div className='product-page'>
        {results && <Sponsored results={results}/>}
        {results && <ProductItem results={results}/>}
        {results && <ShopButton results={results}/>}
    </div>
  )
}

export default ProductPage;