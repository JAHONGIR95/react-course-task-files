import React from 'react'

import './SidebarBtn.scss';

function SidebarBtn({title, icon}) {
    return (
        <button className="sidebar-button">
            <span className="sidebar-icon">{icon}</span>
            <p className="sidebar-title">{title}</p>
        </button>
    )
}

export default SidebarBtn;
