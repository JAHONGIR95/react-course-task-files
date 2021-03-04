import './main.scss';

const TicketsItemList = ({avatar, clientTitle, clientStatus, clientName, clientDate, clientDay, clientTime, priority}) => {
    return(
        <div className="tickets-list-item">
            <img src={avatar} className="client-image"/>
            <div className="client-status">
                <h2 className="client-top-info">{clientTitle}</h2>
                <span className="client-next-info">{clientStatus}</span>
            </div>
            <div className="client-name">
                <h2 className="client-top-info">{clientName}</h2>
                <span className="client-next-info">{clientDate}</span>
            </div>
            <div className="client-date">
                <h2 className="client-top-info">{clientDay}</h2>
                <span className="client-next-info">{clientTime}</span>
            </div>
            <div className="priority">
                <h2 className="priority-case">{priority}</h2>
            </div>
        </div>
    )
}

export default TicketsItemList;