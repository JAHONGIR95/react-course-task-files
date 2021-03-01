import './main.scss';

const SidebarBtn = ({title, icon}) => {
    return(
        <button className="sidebar-btn">
            <div>{icon}</div>
            <span>{title}</span>
        </button>
    );
}

export default SidebarBtn;