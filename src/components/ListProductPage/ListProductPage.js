import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import ListItemProducts from './ListItemProducts';
import './ListProductPage.css';
import {useParams} from 'react-router-dom';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const ListProductPage = ({clickProduct}) => {
      
    let {idCategory} = useParams();
    let url = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`;
    const {results, error, isLoading} = useFetch(url, `listProducts${idCategory}`);

    return (
    <div className='list-products'>
        <h6>Popular Shopping Ideas</h6>
        <div >
            <h6>RESULTS</h6>
            <h6>Price and other details may vary based on product size and color.</h6>
        </div>
        {isLoading && <Loader />}
        {error && <Error error={error} />}
        {results && results.map((el, i) => (
            <ListItemProducts key={i} description={el.description} idProduct={el.id} image={el.images[0]} clickProduct={clickProduct}/>
        ))}
        
    </div>
  )
}

export default ListProductPage;