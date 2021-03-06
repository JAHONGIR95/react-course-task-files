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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-holder">
        <img src={MainLogo} className="sidebar-logo" alt="logo" />
        <a href="javascript:void(0)">Dashboard Kit</a>
      </div>
      <Link className="link" to="/overview">
        <SidebarBtn title="Overview" icon={<ChartIcon />} /> 
      </Link>
      
      <Link className="link" to="/tickets">
        <SidebarBtn title="Tickets" icon={<TicketsIcon />} />
      </Link>

      <Link className="link" to="/ideas">
        <SidebarBtn title="Ideas" icon={<IdeasIcon />} />
      </Link>
      <Link className="link" to="/contacts">
        <SidebarBtn title="Contacts" icon={<ContactsIcon />} />
      </Link>
      <Link className="link" to="/agents">
        <SidebarBtn title="Agents" icon={<AgentsIcon/>} />
      </Link>
      <Link className="link" to="/articles">
        <SidebarBtn title="Articles" icon={<ArticlesIcon />} />
      </Link>
      <Link className="link" to="/settings">
        <SidebarBtn title="Settings" icon={<SettingsIcon />} />
      </Link>
      <Link className="link" to="/subscription">
        <SidebarBtn title="Subscription" icon={<SubsIcon />} />
      </Link>

    </div>
  );
};

export default Sidebar;
