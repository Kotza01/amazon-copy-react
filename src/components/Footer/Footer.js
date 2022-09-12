import React from 'react'
import UsaFlag from '../../assets/america-flag.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-nav'>
            <ul className='footer-options'>
                <li><h6>Amazon.com</h6></li>
                <li><h6>Your Orders</h6></li>
                <li><h6>Your Lists</h6></li>
                <li><h6>Gift Cards & Registry</h6></li>
                <li><h6>Find a Gift</h6></li>
                <li><h6>Your Account</h6></li>
                <li><h6>Browsing History</h6></li>
                <li><h6>Sell products on Amazon</h6></li>
                <li><h6>Returns</h6></li>
                <li><h6>Your Recalls and Product safety Alerts</h6></li>
                <li><h6>-</h6></li>
                <li><h6>Customer Service</h6></li>
            </ul>
        </div>
        <div className='footer-privacity'>
            <div className='footer-state'>   
                <div className='language'>
                    <i className="bi bi-globe"></i>
                    <h6>English</h6>
                </div>
                <h6 className='currency' >$ USD - U.S. Dollar</h6>
                <div className='state'>
                    <img src={UsaFlag} alt='America Flag'/>
                    <h6>United States</h6>
                </div>
            </div>
            <h5>Already a customer? Sing in</h5>
            <div className='footer-condition'>
                <h6>Conditions of USA</h6>
                <h6>Privacity Notice</h6>
                <h6>Interest Based Ads</h6>
            </div>
            <h6 className='reserve-right'>@ 1996-2022, Amazon.com, Inc, of Affillatos</h6>
        </div>
    </footer>
  )
}

export default Footer;