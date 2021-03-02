import {
    ChartIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubsIcon,
} from '../../Assets/styles/Icons/Icons';

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';

import './main.scss';

const Sidebar = () => {
    return(
        <div className="sidebar">
           <SidebarBtn title="Overview" icon={<ChartIcon/>}/>
           <SidebarBtn title="Tickets" icon={<TicketsIcon/>}/>
           <SidebarBtn title="Ideas" icon={<IdeasIcon/>}/>
           <SidebarBtn title="Contacts" icon={<ContactsIcon/>}/>
           <SidebarBtn title="Agents" icon={<AgentsIcon/>}/>
           <SidebarBtn title="Articles" icon={<ArticlesIcon/>}/>
           <SidebarBtn title="Settings" icon={<SettingsIcon/>}/>
           <SidebarBtn title="Subscription" icon={<SubsIcon/>}/>
           <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;