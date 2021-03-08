import './main.scss';

const SidebarBtn = ({title, icon, active}) => {
    console.log(icon);
    return(
        <button className={`sidebar-btn ${active ? 'active' : ''}`}>
            <div className="btn-icon">{icon}</div>
            <span>{title}</span>
        </button>
    );
}

export default SidebarBtn;