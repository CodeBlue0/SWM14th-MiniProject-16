import React from 'react';
import './Header.css'

const Header = () => {


    return(
        <div className='headerBox'>
            <img className="logoImage headerMargin" src="img/logo4.jpg" />
            <div className='flexGrow headerFont headerMargin'>COMMUNITY</div>
            <div className='headerFont headerMargin'>Mypage</div>
        </div>
    )
}

export default Header;