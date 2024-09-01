import React from 'react'
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <ul className='list-styled'>
            <li>
                <img src={logo} alt='apple'/>
            </li>
            <li><a className='link-styled'>Store</a></li>
            <li><a className='link-styled'>Mac</a></li>
            <li><a className='link-styled'>iPad</a></li>
            <li><a className='link-styled'>AirPods</a></li>
            <li><a className='link-styled'>Tv & Home</a></li>
            <li><a className='link-styled'>Airpods</a></li>
            <li><a className='link-styled'>Entertainemt</a></li>
            <li><a className='link-styled'>Accessories</a></li>
            <li><a className='link-styled'>Support</a></li>
            <img src={search} alt='Search' />
            <img src={store} alt='Search' />
        </ul>
      </div>
    </nav>
  )
}

export default Nav
