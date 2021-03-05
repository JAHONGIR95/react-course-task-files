import Sidebar from "../../containers/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TicketsItem from '../../containers/Tickets/TicketsItem';
import Overview from '../../containers/Tickets/Overview';

import './main.scss';


const Tickets = () => {
    return(
        <Router>
            
        <div className="tickets">
            <Sidebar/>
            <div className="content">
                Tickets
                <Switch>
                    <Route path="/tickets" component={TicketsItem}/>
                    <Route path="/overview" component={Overview}/>
                </Switch>
            </div>
        </div>
        </Router>
    );
}

export default Tickets;