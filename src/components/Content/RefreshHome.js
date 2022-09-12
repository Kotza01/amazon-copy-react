import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import RefreshHomeProduct from './RefreshHomeProduct';

const RefreshHome = ({clickProduct}) => {
    
    const url = "https://api.escuelajs.co/api/v1/categories/2/products";
    const {results} = useFetch(url, "refreshHome");

    return (
    <div className='refresh-home'>
        <div className='refresh-home-background'>
        </div>
        <div className='refresh-home-products'>
            <div className='refresh-home-container'>
                <div className='refresh-home-carroussel'>
                    {results && results.map((product, index) => <RefreshHomeProduct clickProduct={clickProduct}  key={index} id={product.id} name={product.title} url={product.images[0]} />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RefreshHome;