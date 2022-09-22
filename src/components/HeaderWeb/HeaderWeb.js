import './HeaderWeb.css';
import logo from '../../assets/logo-3.png';
import UsaFlag from '../../assets/america-flag.png';
import ModalWeb from '../ModalWeb/ModalWeb';
import { useFetch } from '../../hooks/useFetch';
import {NavLink, useNavigate} from 'react-router-dom';

const HeaderWeb = ({modalHoverLanguage, 
                    setModalHoverLanguage, 
                    setDarkBackground,
                    modalHoverReturn,
                    setModalHoverReturn,
                    goToHome,
                    countCart
                }) => 
{
    
  let url = "https://api.escuelajs.co/api/v1/categories";
  const navigate = useNavigate();
  const {results} = useFetch(url, 'category');                        

  const goToShoppingCart = () => {
    navigate('/shopping-cart');
    }

  return (
    <>
    <div className='header-web'>
        <div className='header-web-start'>
            <div className='header-web-start-logo border-fff' onClick={goToHome} >
                <img src={logo} alt='amazon-logo '/>
            </div>
            <div className='header-web-start-deliver border-fff'>
                <i className="bi bi-geo-alt"></i>
                <div>
                    <span className="light-font" >Deliver to</span>
                    <span className='bold-font' >Venezuela</span>
                </div>
            </div>
        </div>
        <div className='header-web-center'>
            <div className='header-web-center-search'>
                <div>
                    <span>All</span>
                    <i className="bi bi-caret-down-fill"></i>
                </div>
                <input className='input-web-center' type="text" />
                <div>
                    <i className="bi bi-search"></i>
                </div>
            </div>
        </div>
        <div className='header-web-end'>
            <div className='header-web-end-language border-fff' onMouseLeave={()=> setModalHoverLanguage(false)} onMouseOver={(e)=> {setModalHoverLanguage(true);setDarkBackground(false)}} >
                <div>
                    <span className='light-font'>English</span>
                </div>
                {modalHoverLanguage&&<ModalWeb>
                    <div className='modal-hover'>
                        <div className='modal-hover-container'>
                            <i className="bi bi-caret-up-fill"></i>
                            <div className='modal-hover-header'>
                                <div className='modal-hover-title'>
                                    <span>Change Language</span>
                                    <span>Learn more</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' defaultChecked/>
                                    <span>English-EN</span>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='modal-hover-content'>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language' />
                                    <span>español - es</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>اللغة العربية - AR</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>Deutsch-DE</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>עִברִית - HE</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>한국어 - KO</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>português - PT</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>中文(简体)-ZH</span>
                                </div>
                                <div className='modal-hover-options'>
                                    <input type='radio' name='language'/>
                                    <span>中文(繁體)-ZH</span>
                                </div>
                            </div>
                            <div className='modal-hover-footer'>
                                <div className='modal-hover-currency'>
                                    <div className='modal-hover-title'>
                                        <span>Change Currency</span>
                                        <span>Learn more</span>
                                    </div>
                                    <div className='modal-hover-title flex-space-between'>
                                        <span>$ - USD - US Dollar</span>
                                        <span>Change</span>
                                    </div>
                                </div>
                                <div className='modal-hover-shop'>
                                    <div>
                                        <img src={UsaFlag} alt='flag usd' />
                                        <span>You are shopping on Amazon.com</span>
                                    </div>
                                    <div>
                                        <span>Change country/region</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </ModalWeb>}
                <div>
                    <img src={UsaFlag} alt='usa-flag' />
                    <i className="bi bi-caret-down-fill caret-down-style"></i>
                </div>
            </div>
            <div className='header-web-end-account border-fff'  onMouseLeave={()=> setModalHoverReturn(false)} onMouseOver={(e)=> {setModalHoverReturn(true) ;setDarkBackground(false)}}>
                <div>
                    <span style={{color:"#fff"}} className='light-font'>Hello, sing in</span>
                </div>
                {modalHoverReturn &&  <ModalWeb>
                    <div className='modal-hover modal-hover-return'>
                        <div className='modal-hover-container modal-container-return'>
                            <i className="bi bi-caret-up-fill"></i>
                            <div className='modal-return-header'>
                                <button className='btn-yellow'>Sing in</button>
                                <div>
                                    <span>New customer?</span>
                                    <span>Start here</span>
                                </div>
                            </div>
                            <div className='modal-return-footer'>
                                <div className='modal-return-column'>
                                    <div className='modal-return-title'>
                                        <span>Your Lists</span>
                                    </div>
                                    <ul>
                                        <li>Create a List</li>
                                        <li>Find a List or Registry</li>
                                        <li>AmazonSmile Charisty Lists</li>
                                    </ul>
                                </div>
                                <div className='modal-return-column'>
                                    <div className='modal-return-title'>
                                        <span>Your Account</span>
                                    </div>
                                    <ul>
                                        <li>Account</li>
                                        <li>Orders</li>
                                        <li>Recommendations</li>
                                        <li>Browsing History</li>
                                        <li>Watchlist</li>
                                        <li>Video Purchases & Rentals</li>
                                        <li>Kindle Unlimited</li>
                                        <li>Content & Devices</li>
                                        <li>Subscribe & Save Item</li>
                                        <li>Memberships & Subscriptions</li>
                                        <li>Music Library</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </ModalWeb>}
                <div>
                    <span className='bold-font' >Account & Lists</span>
                    <i  className="bi bi-caret-down-fill caret-down-style"></i>
                </div>
            </div>
            <div className='header-web-end-order border-fff'>
                <span  className='light-font' style={{color:"#fff"}}>Returns</span>
                <span className='bold-font' >& Orders</span>
            </div>
            <div className='header-web-end-cart border-fff' onClick={goToShoppingCart} >
                <div>
                    <span>{countCart}</span>
                    <i className="bi bi-cart3"></i> 
                </div>
                <span className='bold-font'>Cart</span>
            </div>
        </div>
    </div>
    <div className='header-web-category'>
        <div className='border-fff' >
            <i className="bi bi-list"></i>
            <span>All</span>
        </div>
        {results && results.map((el,index) => (
            <div className='border-fff' key={index}>
                <span><NavLink to={`/list-products/${el.id}`} >{el.name}</NavLink></span>
            </div>
        ))}
    </div>
    </>
  )
}

export default HeaderWeb;