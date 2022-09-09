import React from 'react'

const Nav = ({toggleNav, selectNav}) => {

  return (
    <section className={'header-nav '+selectNav}>
        <div className='left'>
            <div className='top'>
                <div>
                    <span>Sing in</span>
                    <i className="bi bi-person"></i>
                </div>
                <div>
                    <span>Browse</span>                    
                    <span>Amazon</span>                    
                </div>  
            </div>
            <div className='nav-options'>
                <div className='home'>
                    <span>Amazon Home</span>
                    <i className="bi bi-house-door-fill"></i>
                </div>
                <div className='trending'>
                    <div><span>Trending</span></div>
                    <div><span>Movers & Shakers</span></div>
                </div>
                <div className='top-departments'>
                    <div><span>Top Deparments</span></div>
                    <ul>
                        <li><span>Home</span></li>
                        <li><span>Health & Household</span></li>
                        <li><span>Books</span></li>
                        <li><span>Pc</span></li>
                        <li><span>See All Departments</span><i className="bi bi-chevron-right"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='right' onClick={toggleNav}>
            <i className="bi bi-x-lg"></i>
        </div>
    </section>
  )
}

export default Nav;