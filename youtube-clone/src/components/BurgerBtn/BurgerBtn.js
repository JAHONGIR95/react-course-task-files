import React from 'react'
import {Link} from 'react-router-dom'

import Burger from '../../assets/images/burger.png';
import Logo from '../../assets/images/youtube.png';

import './BurgerBtn.scss'

function BurgerBtn() {
    return (
        <div className="burger-btn">
            <Link>
                <img src={Burger} className="burger-style" alt=""/>
            </Link>
            <Link to="/">
                <img src={Logo} className="logo-style" alt=""/>
            </Link>
        </div>
    )
}

export default BurgerBtn;
