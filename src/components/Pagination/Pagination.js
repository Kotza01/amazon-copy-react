import React, {useState } from 'react'
import { useEventListener } from 'usehooks-ts';
import { useFetch } from '../../hooks/useFetch';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import './Pagination.css'

const Pagination = () => {

    const [page, setPage] = useState(1);
    const [resize, setResize] = useState(false);

    let url = `https://api.escuelajs.co/api/v1/categories/2/products`;
    const {results, error, isLoading} = useFetch(url, `listProducts2`);

    let productsWidth = 0;
    let productCount = 0;
    let pages = 0;
    let numOfProduct = 0;
    let newPages = 0;

    const countOfPagination = () => {
      productsWidth = window.innerWidth-157;
      productCount = Math.floor(productsWidth / 160);
      pages= Math.ceil(results.length / productCount);
      numOfProduct = (page-1) * productCount;
      if(page===pages){
        productCount = results.length-numOfProduct;  
      }
    }

    const nextPage = () => {
        if(page===pages) {
            setPage(1);
        } else {
            setPage(page+1);
        }
    }

    const previusPage = () => {
        if(page===1) {
            setPage(pages);
        } else {
            setPage(page-1);
        }
    }

    const handleResize = () => {
        if(results){
            newPages= Math.ceil(results.length / Math.floor((window.innerWidth-157)/160));
            if(newPages !== pages && window.innerWidth>1024) {
                if(resize) setResize(false);
                else setResize(true);
            }   
        }
    }
    
    useEventListener('resize', handleResize);

    if(isLoading) {
        return(
            <Loader/>
        )
    }

    if(error) {
        return (
            <Error error={error}/>
        )
    }
    
    if(results){
        countOfPagination();
        return (
            <div className='pagination-'>
                <div className='pagination-header'>
                    <div>
                        <span>Inpired by your browsing history</span>
                    </div>
                    <div>
                        <span>Page {page} of {pages}</span>
                        <span className='blue-font'>Start over</span>
                    </div>
                </div> 
                <div className='pagination-content'>
                    <button onClick={previusPage} ><i className="bi bi-chevron-left"></i></button>
                    <div className='pagination-products'>
                        {Array.from({length : productCount}).map((el,i)=> (
                            <div key={i} className='pagination-product'>
                                <img src={results[i+numOfProduct].images[0]} alt={results[i+numOfProduct].title}/>
                                <div>
                                <div className='pagination-product-description'>
                                    <span className='blue-font'>{results[i+numOfProduct].title} | {results[i+numOfProduct].description}</span>
                                </div>
                                <div className='pagination-product-stars'>
                                    <div className='product-item-header-star'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                    <div><span>2</span></div>
                                </div>
                                <div className='pagination-product-price'>
                                    <span>$</span>
                                    <span>{results[i+numOfProduct].price}.00</span>
                                </div>
                                <div className='pagination-product-shipping'>
                                    <span>$11.78 shipping</span>
                                </div>
                                </div>
                            </div>))}                
                    </div>
                    <button onClick={nextPage}><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
          )
    } else {
        return (
            <div>

            </div>
        )
    }

  
}

export default Pagination;