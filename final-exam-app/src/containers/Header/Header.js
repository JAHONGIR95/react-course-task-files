import React from 'react'

import './Header.scss';

import KiwiLogo from '../../assets/images/kiwi-logo.svg';

function Header() {
    return (
        <div className="header" >
            <div className="header-top">
                <div className="header-top__left">
                    <img src={KiwiLogo} alt=""/>
                </div>
            </div>

            <div className="header-bottom">

            </div>
        </div>
    )
}

export default Header;
