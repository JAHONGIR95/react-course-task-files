import Sidebar from "../../containers/Sidebar/Sidebar";

import TicketsItem from '../../containers/Tickets/TicketsItem';

import './main.scss';


const Tickets = () => {
    return(
        <div className="tickets">
            <Sidebar/>
            <div className="content">
                Tickets
                <TicketsItem/>
            </div>
        </div>
    );
}

export default Tickets;