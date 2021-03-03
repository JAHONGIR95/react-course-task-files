const TicketsItem = ({avatar, }) => {
    return(
        <div className="tickets-list-item">
            <img src={avatar} className="client-image"/>
            <div className="client-status">
                <h2 className="client-top-info">{}</h2>
                <span className="client-next-info">{}</span>
            </div>
            <div className="client-name">
                <h2 className="client-top-info">{}</h2>
                <span className="client-next-info">{}</span>
            </div>
            <div className="client-date">
                <h2 className="client-top-info">{}</h2>
                <span className="client-next-info">{}</span>
            </div>
            <div className="priority">
                <h2 className="priority-case">{}</h2>
            </div>
        </div>
    )
}