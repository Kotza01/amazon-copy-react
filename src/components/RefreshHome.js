import React from 'react'
import { useFetch } from '../hooks/useFetch';
import RefreshHomeProduct from './RefreshHomeProduct';

const RefreshHome = () => {
    
    const url = "https://api.escuelajs.co/api/v1/categories/2/products";
    const {results, isLoading, error} = useFetch(url, "refreshHome");
  
    console.log(results, isLoading, error);
    return (
    <div className='refresh-home'>
        <div className='refresh-home-background'>
        </div>
        <div className='refresh-home-products'>
            <div className='refresh-home-container'>
                <div className='refresh-home-carroussel'>
                    {results && results.map((product, index) => <RefreshHomeProduct key={index} name={product.title} url={product.images[0]}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RefreshHome;