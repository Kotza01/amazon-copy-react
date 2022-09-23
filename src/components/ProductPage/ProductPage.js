import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import {useParams} from 'react-router-dom';
import ProductItem from './ProductItem';
import './ProductPage.css';
import ShopButton from './ShopButton';
import Sponsored from './Sponsored';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const ProductPage = ({addToCart, openModal}) => {

  let {idProduct} = useParams();
  let url = `https://api.escuelajs.co/api/v1/products/${idProduct}`;
  const {results, isLoading, error} = useFetch(url,'product');

  if(isLoading){
    return(
      <div className='product-page'>
        <Loader />
      </div>
    )
  }

  if(error) {
    return (
      <div className='product-page'>
        <Error error={error}/>
      </div>
    )
  }

  return (
    <div className='product-page'>
        {results && <Sponsored results={results}/>}
        {results && <ProductItem results={results}/>}
        {results && <ShopButton results={results} addToCart={addToCart} openModal={openModal}/>}
    </div>
  )
}

export default ProductPage;