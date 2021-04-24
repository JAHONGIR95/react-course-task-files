import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss';

import KiwiLogo from '../../assets/images/kiwi-logo.svg';

function Header({ logoText, navbar, headerBottom }) {
    return (
        <div className={styles.header} >
            <div className={styles.headerTop}>
                <Link to="/" className={styles.logoWrapper}>
                    <img className={styles.kiwiLogo} src={KiwiLogo} alt=""/>
                    <h3 className={styles.logoText}>{logoText}</h3>
                </Link>
                <div>{ navbar }</div>
                <div className={styles.headerTopRight}>
                    <div className={styles.languages}>
                        <Link className={styles.langs}>Рус</Link>
                        <Link className={styles.langs}><span className={styles.stick}>|</span>O’z</Link>
                    </div>
                    <div className={styles.logIn}>
                        <Link to="" className={styles.logOut}>Вход</Link>
                        <Link to="" className={styles.registration, styles.logOut}><span className={styles.stick}>|</span>Регистрация</Link>
                    </div>
                </div>
                
            </div>

            <div className="header-bottom">
                { headerBottom }
            </div>
        </div>
    )
}

export default Header;
