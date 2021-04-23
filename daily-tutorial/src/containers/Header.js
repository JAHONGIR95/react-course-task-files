import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './main.scss';

function Header({ sidebarState, setSidebarState }) {

    const [activePage, setActivePage] = useState('')

    return (
        <div className="header">
            <button onClick={() => setSidebarState(!sidebarState)}>Burger</button>
            <h1>Header</h1>
            <div className="navbar">
                <Link to="/"
                    className={`header-link ${activePage == "/" ? 'active' : ''}`}
                    onClick={ ()=> setActivePage('/')}
                    >
                    Home
                </Link>
                <Link 
                    to="/contacts"
                    className={`header-link ${activePage == "/contacts" ? 'active' : ''}`}
                    onClick={ ()=> setActivePage('/contacts')}
                   > Contacts
                </Link>
                <Link 
                    className={`header-link ${activePage == "/master" ? 'active' : ''}`}
                    onClick={ ()=> setActivePage('/master')} 
                    to="/master"
                    >
                    Master
                </Link>
                <Link 
                    className={`header-link ${activePage == "/about" ? 'active' : ''}`}
                    onClick={ ()=> setActivePage('/about')}
                    to="/about"
                >
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header
