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
} from "../../Assets/Icons/Icons";

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
      <Link className="link" to="/tickets">
        <SidebarBtn title="Tickets" icon={<TicketsIcon />} />
      </Link>

      <Link className="link" to="/overview">
        <SidebarBtn title="Overview" icon={<ChartIcon />} /> 
      </Link>

      <SidebarBtn title="Ideas" icon={<IdeasIcon />} />
      <SidebarBtn title="Contacts" icon={<ContactsIcon />} />
      <SidebarBtn title="Agents" icon={<AgentsIcon />} />
      <SidebarBtn title="Articles" icon={<ArticlesIcon />} />
      <SidebarBtn title="Settings" icon={<SettingsIcon />} />
      <SidebarBtn title="Subscription" icon={<SubsIcon />} />
    </div>
  );
};

export default Sidebar;
