import {Fragment} from 'react';

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';

import './main.scss';

const Sidebar = () => {
    return(
        <div className="sidebar">
           <SidebarBtn/>
           <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;