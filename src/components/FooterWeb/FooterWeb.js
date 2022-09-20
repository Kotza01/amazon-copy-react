import './FooterWeb.css';
import UsaFlag from '../../assets/america-flag.png';
import logo from '../../assets/logo-3.png';
import React from 'react'

const FooterWeb = () => {

    const goToTop = () => {
        window.scrollTo(0,0);
    }

  return (
    <>
    <div className='container-to-top' onClick={goToTop} >
        <h6>Back to top</h6>
    </div>
    <div className='web-container-footer'>
        <div className='web-footer-content'>
            <div className='web-footer-content-options'>
                <div className='title'>
                <span>Get to Know Us</span>
                </div>
                <div className='options'>
                <span>Careers</span>
                <span>Blog</span>
                <span>About Amazon</span>
                <span>Investor Relations</span>
                <span>Amazon Devices</span>
                <span>Amazon Science</span>
                </div>
            </div>
            <div></div>
            <div className='web-footer-content-options'>
                <div className='title'>
                <span>Make Money with Us</span>
                </div>
                <div className='options'>
                <span>sell products on Amazon</span>
                <span>Sell on Amazon Bussines</span>
                <span>Sell apps on Amazon</span>
                <span>Become an Affiliate</span>
                <span>Advertise Your Products</span>
                <span>Self-Publish with us</span>
                <span>Host an Amazon Hub</span>
                <span>See More Make Money with Us</span>
                </div>
            </div>
            <div></div>
            <div className='web-footer-content-options'>
                <div className='title'>
                <span>Amazon Payment Products</span>
                </div>
                <div className='options'>
                <span>Amazon Business Card</span>
                <span>Shop with Points</span>
                <span>Reload Your Balance</span>
                <span>Amazon Currency Converter</span>
                </div>
            </div>
            <div></div>
            <div className='web-footer-content-options'>
                <div className='title'>
                <span>Let Us Help You</span>
                </div>
                <div className='options'>
                <span>Amazon and COVID-19</span>
                <span>yout Account</span>
                <span>Your Orders</span>
                <span>Shipping Rates & Policies</span>
                <span>Returns & Replacements</span>
                <span>Manage Your Content Devices</span>
                <span>Amazon Assistant</span>
                <span>Help</span>
                </div>
            </div>
        </div>
        <div className='line'></div>
        <div className='web-footer-bottom'>
            <img src={logo} alt='Amazon Logo' />
            <div className='web-footer-bottom-item'>
                <div className='web-footer-bottom-language'>
                    <i className="bi bi-globe"></i>
                    <span>English</span>
                    <div>
                        <i className="bi bi-caret-up-fill"></i>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                </div>
                <div className='web-footer-bottom-currency'>
                    <span>$ USD - U.S. Dollar</span>
                </div>
                <div className='web-footer-bottom-state'>
                    <img src={UsaFlag} alt='usa flag'/>
                    <span>United States</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterWeb;