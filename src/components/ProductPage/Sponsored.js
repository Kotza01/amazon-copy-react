import React from 'react'
import primerLogo from '../../assets/prime-video.png';

const Sponsored = ({results}) => {
  return (
    <>
      <div className='sponsored' >
            <div className='sponsored-image'>
                <img src={results.images[0]} alt='product' />
            </div>
            <div className='sponsored-title'>
                <h6>{results.title}</h6>
            </div>
            <div className='sponsored-price'>
                <span>$</span>
                <h6>{results.price}.00</h6>
                <img src={primerLogo} alt='prime' />
            </div>
        </div>
        <div className='sponsored-bottom'>
            <h6>Sponsored</h6>
        </div>
    </>
  )
}

export default Sponsored;