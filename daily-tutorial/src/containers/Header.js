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
                <Link
                    className={`header-link ${}`}
                    to="/">
                    onClick={()=> setActivePage('/')}
                    Home
                </Link>
                <Link className="header-link" to="/contacts">
                    Contacts
                </Link>
                <Link className="header-link" to="/master">
                    Master
                </Link>
                <Link className="header-link" to="/about">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header
