import React, { useState } from 'react';
import './ProductPageWeb.css';
import primeVideo from '../../assets/prime-video.png';
import {useParams} from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useFetch } from '../../hooks/useFetch';

const ProductPageWeb = ({addToCart, openModal}) => {

  const [countCart, setCountCart] = useState(1);
  const [imagesSrc, setImagesSrc] = useState('');

  const handleCountCart = (event) => {
    console.log(event.target.value);
    setCountCart(parseInt(event.target.value) );
  }

  const handleImage = (src) => {
    setImagesSrc(src);
  }

  let {idProduct} = useParams();
  let url = `https://api.escuelajs.co/api/v1/products/${idProduct}`;
  const {results} = useFetch(url,'product');

  if(results===undefined || Object.hasOwn(results,'error')) {
    return (
      <div className='product-page'>
    </div>
    )
  }

  return (
    <div className='product-page-web'>
        <div className='product-page-web-header'>
            <div className='product-page-web-header-content'>
                <img src={'https://m.media-amazon.com/images/I/51mhGBEbPEL._AC_SX980_SY55_.jpg'} alt='Mens Hunter' />
                <div className='product-page-web-header-name'>
                    <span>Mens White Hunter X Hunter Anime Cartoon Hooded Sweatshirt</span>
                </div>
                <div className='product-page-web-header-star'>
                    <div className='product-item-header-star'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div><span>38</span></div>
                    <div className='product-page-web-header-price price-style-one'>
                        <span>$</span>
                        <span>36</span>
                        <span>00</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='product-page-web-content'>
            <div className='product-page-web-content-left'>
                <div className='product-page-web-content-img-left' >
                    <div className='image-horizontal-carrousel'>
                        <div className='box-shadow'>
                            <img src={results.images[0]} alt={results.title} />
                        </div>
                    </div>
                </div>
                <div className='product-page-web-content-img-right'>
                    <div>
                        {imagesSrc===''? <img src={results.images[0]} alt={results.title} /> : <img src={imagesSrc} alt={results.title} />}
                    </div>
                </div>
            </div>
            <div className='product-page-web-content-right'>
                <div className='product-page-web-content-description'>
                    <div className='product-page-web-content-description-xbox-store'>
                        <span className='blue-font'>Visit the Xbox Store</span>
                    </div>
                    <div className='product-page-web-content-description-title'>
                        <span>{results.title}</span>
                    </div>
                    <div className='product-page-web-content-description-ratings'>
                        <div className='product-item-header-star'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <div><i className="bi bi-chevron-down"></i><span className='blue-font'>96 ratings</span></div>
                    </div>
                    <div className='product-page-web-content-description-choice'>
                        <div>
                            <span>Amazon`s</span>
                            <span>Choice</span>
                        </div>
                        <div> 
                            <span>for "</span>
                            <span className='blue-font'>xbox shirts</span>
                            <span>"</span>
                        </div>
                    </div>
                    <div className='product-page-web-content-description-price price-style-one'>
                        <span>$</span>
                        <span>{results.price}</span>
                        <span>00</span>
                    </div>
                    <div className='product-page-web-content-description-fees'>
                        <div>
                            <span>No Import Fees Deposit & $7.81 Shipping to Mexico Details</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        <div>
                            <img src={logo} alt='Amazon logo' />
                            <span>merch on demand</span>
                            <span className='blue-font'>Learn more</span>
                        </div>
                    </div>
                    <div className='product-page-web-content-description-feature'>
                        <div className='text-'>
                            <span>Fit Type:</span>
                            <span>Men</span>
                        </div>
                        <div className='text-'>
                            <span>Color:</span>
                            <span>Black</span>
                        </div>
                        <div className='carrousel-vertical-img'>
                            {results.images.map((el, index)=> (
                                <div key={index} onMouseEnter={()=> handleImage(el)} >
                                    <img src={el} style={{borderRadius:'0'}} alt={results.title} />
                                </div>
                            ))  }
                        </div>
                        <div className='size-'>
                            <div>
                                <span>Size:</span>
                            </div>
                            <select className='select-style' defaultValue="small" name="size">
                                <option value="small">Small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                                <option value="x-large">x-large</option>
                                <option value="xx-large">xx-large</option>
                            </select>
                            {/*<button className='box-shadow'>Small <i className="bi bi-chevron-down"></i></button>*/}
                        </div>
                        <ul>
                            <li>{results.description}</li>
                            <li>Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester</li>
                            <li>Imported</li>
                            <li>Pull On closure</li>
                            <li>Machine Wash</li>
                            <li>Ripple Junction Officially Licensed Xbox merchandise</li>
                            <li>Xbox has been giving the world cutting edge gaming since 2001. Power your dreams in this specially designed gear.</li>
                            <li>Lightweight, Classic fit, Double-needle sleeve and bottom hem</li>
                        </ul>
                    </div>
                </div>
                <div className='product-page-web-content-buy'>
                    <div className='product-page-web-content-buy-card'>
                        <div className='product-page-web-content-buy-card-price price-style-one'>
                            <span>$</span>
                            <span>{results.price}</span>
                            <span>00</span>
                        </div>
                        <div className='product-page-web-content-buy-card-fees'>
                            <div><span>No import Fees Deposit & $7.81</span></div>
                            <div><span>Shipping to Mexico Details </span><i className="bi bi-chevron-down"></i></div>
                        </div>
                        <div className='product-page-web-content-buy-card-delivery'>
                            <div>
                                <span>Delivery</span>
                                <span>Mon, Sep 26</span>
                            </div>
                            <div>
                                <i className="bi bi-geo-alt"></i>
                                <span className='blue-font'>Deliver to México</span>
                            </div>
                        </div>
                        <div className='product-page-web-content-buy-card-stock'>
                            <div>
                                <span>In Stock.</span>
                            </div>
                            <select className='select-style box-shadow' defaultValue="1" name="size" onChange={handleCountCart} >
                                <option value="1">Qty: 1</option>
                                <option value="2">Qty: 2</option>
                                <option value="3">Qty: 3</option>
                                <option value="4">Qty: 4</option>
                                <option value="5">Qty: 5</option>
                            </select>
                        </div>
                        <div className='product-page-web-content-buy-card-buttons'>
                            <button onClick={()=> addToCart({...results, price : results.price>30 ? results.price-30:results.price}, countCart) }>Add to Cart</button>
                            <button onClick={openModal}>Buy Now</button>
                        </div>
                        <div className='product-page-web-content-buy-card-security'>
                            <div>
                                <i className="bi bi-lock-fill"></i>
                                <span>Secure transaction</span>
                            </div>
                            <div>
                                <div>
                                    <span>Ships from</span>
                                    <span>Amazon.com</span>
                                </div>
                                <div>
                                    <span>Sold by</span>
                                    <span>Amazon.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='product-page-web-content-buy-card-returns'>
                            <div>
                                <span>Return policy:</span>
                                <span className='blue-font'>Eligible for Return, Refund or Replacement within 30 days of receipt</span>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>
                        <div className='product-page-web-content-buy-card-add-list'>
                            <button className='box-shadow'>Add to List</button>
                        </div>
                    </div>
                    <div className='product-page-web-content-buy-prime'>
                        <div className='product-page-web-content-buy-prime-img'>
                            <img src='https://m.media-amazon.com/images/I/71MV8-w0+NL._AC_SX245_SY250_.jpg' alt='Shirt Prime' />
                        </div>
                        <div className='product-page-web-content-buy-prime-title'>
                            <span>INTO THE AM Premium Graphic Tee...</span>
                        </div>
                        <div className='product-page-web-content-buy-prime-star'>
                            <div className='product-item-header-star'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <div><span>1,290</span></div>
                        </div>
                        <div className='product-page-web-content-buy-prime-price'>
                            <div className='price-style-one'>
                                <span>$</span>
                                <span>24</span>
                                <span>95</span>
                            </div>
                            <img src={primeVideo} alt='Prime Video' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPageWeb;