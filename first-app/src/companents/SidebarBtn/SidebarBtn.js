import './main.scss';

const SidebarBtn = ({title, icon}) => {
    console.log(icon);
    return(
        <button className="sidebar-btn">
            <div className="btn-icon">{icon}</div>
            <span>{title}</span>
        </button>
    );
}

export default SidebarBtn;