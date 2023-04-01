import React from 'react'
import '../styles/HotAccessoriesMenu.css';
import { Link } from 'react-router-dom';

const HotAccesoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to='/music'>Music Store</Link>
        <Link className='HotAccessoriesLink' to='/smartdevices'>Smart Devices</Link>
        <Link className='HotAccessoriesLink' to='/home'>Home</Link>
        <Link className='HotAccessoriesLink' to='/lifestyle'>LifeStyle</Link>
        <Link className='HotAccessoriesLink' to='/mobileAccesories'>Mobile Accesories</Link>
    </div>
  )
}

export default HotAccesoriesMenu;