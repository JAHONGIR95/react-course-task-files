import {
    chartIcon,
    ticketsIcon,
    ideasIcon,
    contactsIcon,
    agentsIcon,
    articlesIcon,
    settingsIcon,
    subsIcon
} from '../../Assets/styles/Icons/Icons';

console.log({chartIcon});

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';

import './main.scss';

const Sidebar = () => {
    return(
        <div className="sidebar">
           <SidebarBtn title="Overview" icon={<chartIcon/>}/>
           <SidebarBtn title="Tickets" icon={<ticketsIcon/>}/>
           <SidebarBtn title="Ideas" icon={<ideasIcon/>}/>
           <SidebarBtn title="Contacts" icon={<contactsIcon/>}/>
           <SidebarBtn title="Agents" icon={<agentsIcon/>}/>
           <SidebarBtn title="Articles" icon={<articlesIcon/>}/>
           <SidebarBtn title="Settings" icon={<settingsIcon/>}/>
           <SidebarBtn title="Subscription" icon={<subsIcon/>}/>
           <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;