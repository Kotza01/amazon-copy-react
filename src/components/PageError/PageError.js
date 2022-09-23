import React from 'react'
import PageNotFound from '../../assets/page-not-found.png';
import './PageError.css'

const PageError = () => {
  return (
    <div className='page-error'>
        <img src={PageNotFound} alt='not-found' />
    </div>
  )
}

export default PageError;