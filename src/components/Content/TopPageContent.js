import React from 'react'

const TopPageContent = () => {
  
const goToTop = () => {
    window.scrollTo(0,0);
}
  
  return (
    <div onClick={goToTop} className='top-page-content'>
        <i className="bi bi-caret-up-fill"></i>
        <h6>TOP OF PAGE</h6>
    </div>
  )
}

export default TopPageContent;