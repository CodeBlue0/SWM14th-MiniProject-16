import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='headerBox'>
            <img className="logoImage headerMargin" src="img/logo4.jpg" />
            <Link to='/' className='flexGrow headerFont headerMargin'>COMMUNITY</Link>
            <Link to='/mypage' className='headerFont headerMargin'>Mypage</Link>
        </div>
    )
}

export default Header;