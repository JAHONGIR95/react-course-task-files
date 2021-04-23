import React from 'react'

import './main.scss';

function Sidebar({ sidebarState }) {
    return (
        <div className={`sidebar ${sidebarState ? 'active' : ''}`}>
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
