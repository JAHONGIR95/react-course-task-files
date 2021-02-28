import Sidebar from "../../containers/Sidebar/Sidebar";

import './main.scss';


const Tickets = () => {
    return(
        <div className="tickets">
            <Sidebar/>
            <div className="content">
                Tickets
            </div>
        </div>
    );
}

export default Tickets;