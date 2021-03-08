import {Link} from 'react-router-dom';


import {
  ChartIcon,
  TicketsIcon,
  IdeasIcon,
  ContactsIcon,
  AgentsIcon,
  ArticlesIcon,
  SettingsIcon,
  SubsIcon,
} from "../../Assets/Icons/icons";

import SidebarBtn from "../../companents/SidebarBtn/SidebarBtn";

import MainLogo from "../../Assets/images/icons/logo.png";

import "./main.scss";

const Sidebar = ({activePage, setActivePage}) => {

  
  return (

    <div className="sidebar">
      <div className="logo-holder">
        <img src={MainLogo} className="sidebar-logo" alt="logo" />
        <a href="javascript:void(0)">Dashboard Kit</a>
        {/* <h2>{activePage}</h2> */}
      </div>
      <Link className="link" to="/overview" onClick={() => setActivePage('overview')}>
        <SidebarBtn title="Overview" icon={<ChartIcon />} 
        active={activePage == 'overview'}/> 
      </Link>
      
      <Link className="link" to="/tickets" onClick={() => setActivePage('tickets')}>
        <SidebarBtn title="Tickets" icon={<TicketsIcon />}
        active={activePage == 'tickets'} />
      </Link>

      <Link className="link" to="/ideas" onClick={() => setActivePage('ideas')}>
        <SidebarBtn title="Ideas" icon={<IdeasIcon />}
        active={activePage == 'ideas'} />
      </Link>
      <Link className="link" to="/contacts" onClick={() => setActivePage('contacts')}>
        <SidebarBtn title="Contacts" icon={<ContactsIcon />}
        active={activePage == 'contacts'} />
      </Link>
      <Link className="link" to="/agents" onClick={() => setActivePage('agents')}>
        <SidebarBtn title="Agents" icon={<AgentsIcon/>}
        active={activePage == 'agents'} />
      </Link>
      <Link className="link" to="/articles" onClick={() => setActivePage('articles')}>
        <SidebarBtn title="Articles" icon={<ArticlesIcon />}
        active={activePage == 'articles'} />
      </Link>
      <Link className="link" to="/settings" onClick={() => setActivePage('settings')}>
        <SidebarBtn title="Settings" icon={<SettingsIcon />}
        active={activePage == 'settings'} />
      </Link>
      <Link className="link" to="/subscription" onClick={() => setActivePage('subscription')}>
        <SidebarBtn title="Subscription" icon={<SubsIcon />}
        active={activePage == 'subscription'} />
      </Link>

    </div>
  );
};

export default Sidebar;
