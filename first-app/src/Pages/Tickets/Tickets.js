import Sidebar from "../../containers/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TicketsItem from '../../containers/Tickets/TicketsItem';
import Overview from '../../containers/Tickets/Overview';
import Ideas from '../../containers/Tickets/Ideas';
import Settings from '../../containers/Tickets/Settings';
import Subscription from '../../containers/Tickets/Subscription';
import Contacts from '../../containers/Tickets/Contacts';
import Agents from '../../containers/Tickets/Agents';
import Articles from '../../containers/Tickets/Articles';
import Header from '../../containers/Header/Header';

import './main.scss';


const Tickets = () => {
    return(
        <Router>
            
        <div className="tickets">

            <Sidebar/>
            <div className="content">
                <Header/>
                <Switch>
                    <Route path="/tickets" component={TicketsItem}/>
                    <Route path="/overview" component={Overview}/>
                    <Route path="/agents" component={Agents}/>
                    <Route path="/subscription" component={Subscription}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/articles" component={Articles}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/ideas" component={Ideas}/>
                </Switch>
            </div>
        </div>
        </Router>
    );
}

export default Tickets;