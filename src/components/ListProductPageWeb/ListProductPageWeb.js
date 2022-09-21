import React from 'react'
import './ListProductPageWeb.css';
import {useParams} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const ListProductPageWeb = ({clickProduct}) => {

    let {idCategory} = useParams();
    let url = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`;
    const {results} = useFetch(url, `listProducts${idCategory}`);

  return (
    <div className='web-list-products'>
        <div className='web-list-products-header box-shadow'>
            <div>
                <span>1-48 of over 10,000 results for </span>
                <span>"AmazonBasics"</span>
            </div>
            <button className='box-shadow'>
                <span>Sort by: Feature</span>
                <i className="bi bi-chevron-down"></i>
            </button>
        </div>
        <div className='web-list-products-content'>
            <aside className='web-list-products-content-left'>
                <div className='web-list-products-content-left-seccion'>
                    <div className='title'>
                        <span>Climate Pledge Friendly</span>
                    </div>
                    <div className='options'>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='climate'/>
                            <label htmlFor='climate' >Climate Pledge Friendly</label>
                        </div>
                    </div>
                </div>
                <div className='web-list-products-content-left-seccion'>
                    <div className='title'>
                        <span>Department</span>
                    </div>
                    <div className='options'>
                        <div className='option-span'>
                            <span>Bedding</span>
                            <span>Household Supplies</span>
                            <span>Kitchen & Dining</span>
                            <span>Computers & Accesories</span>
                            <span>Home Storage & Organization</span>
                            <span>Tools & Home Improvement</span>
                            <span>Office & School Supplies</span>
                            <span>Home Office Furniture</span>
                        </div>
                    </div>
                </div>
                <div className='web-list-products-content-left-seccion'>
                    <div className='title'>
                        <span>Customer Reviews</span>
                    </div>
                    <div className='options'>
                        <div className='option-star'>
                            <div className='product-item-header-star'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div><span>& Up</span></div>
                        </div>
                        <div className='option-star'>
                            <div className='product-item-header-star'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div><span>& Up</span></div>
                        </div>
                        <div className='option-star'>
                            <div className='product-item-header-star'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div><span>& Up</span></div>
                        </div>
                        <div className='option-star'>
                            <div className='product-item-header-star'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div><span>& Up</span></div>
                        </div>
                    </div>
                </div>
                <div className='web-list-products-content-left-seccion'>
                    <div className='title'>
                        <span>Brand</span>
                    </div>
                    <div className='options'>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='basics'/>
                            <label htmlFor='basics' >Amazon Basics</label>
                        </div>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='glad'/>
                            <label htmlFor='glad'>Glad</label>
                        </div>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='stewart'/>
                            <label htmlFor='stewart'>Martha Stewart Essentials</label>
                        </div>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='home'/>
                            <label htmlFor='home' >Sweet Home Collection</label>
                        </div>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='magic'/>
                            <label htmlFor='magic' >SIMPLI-MAGIC</label>
                        </div>
                        <div className='option-checkbox'>
                            <input type='checkbox' id='brite'/>
                            <label htmlFor='brite' >Scotch Brite</label>
                        </div>
                    </div>
                </div>
                <div className='web-list-products-content-left-seccion'>
                    <div className='title'>
                        <span>Price</span>
                    </div>
                    <div className='options'>
                        <div className='option-span'>
                            <span>Under $25</span>
                            <span>$25 to $50</span>
                            <span>$50 to $100</span>
                            <span>$100 to $200</span>
                            <span>$200 & Above</span>
                        </div>
                    </div>
                </div>
            </aside>
            <section className='web-list-products-content-rigth'>
                <div className='web-list-products-content-rigth-header'>
                    <div>
                        <span>Results</span>
                    </div>
                    <div>
                        <span>Price and other details may vary based on product size and color</span>
                    </div>
                </div>
                <div className='web-list-products-content-rigth-content'>
                    {results && results.map((el, index) => (
                        <div className='web-list-product' key={index} onClick={()=> clickProduct(el.id)}>
                            <div>
                                <div className='web-list-img'>
                                    <img src={el.images[0]} alt={el.name}/>
                                </div>
                                <div className='web-list-text'>
                                    <div className='web-list-descrption'>
                                        <span>{el.name} - {el.description}</span>
                                    </div>
                                    <div className='web-list-count'>
                                        <span>75 Count (Pack of 3)</span>
                                    </div>
                                    <div className='web-list-star'>
                                        <div className='product-item-header-star'>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <div><i className="bi bi-chevron-down"></i><span>106,66</span></div>
                                    </div>
                                    <div className='web-list-price'>
                                        <span>$</span>
                                        <span>{el.price}</span>
                                        <span>00</span>
                                    </div>
                                    <div className='web-list-brand'><span>Amazon Brand</span></div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </section>
        </div>
    </div>
  )
}

export default ListProductPageWeb;