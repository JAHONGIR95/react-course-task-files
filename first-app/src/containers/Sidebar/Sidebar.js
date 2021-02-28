import {Fragment} from 'react';

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';

import './main.scss';

const Sidebar = () => {
    return(
        <Fragment>
           <SidebarBtn/>
           <h1>Sidebar</h1>
        </Fragment>
    );
}

export default Sidebar;