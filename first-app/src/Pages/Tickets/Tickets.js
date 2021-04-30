import Sidebar from "../../containers/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';

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
    let currentPageLocation = window.location.pathname;
    currentPageLocation = currentPageLocation.slice(1)
    
  const [activePage, setActivePage] = useState(currentPageLocation);
  

    return(
        <Router>
            
        <div className="tickets">

            <Sidebar activePage={activePage} setActivePage={setActivePage}/>
            <div className="content">
                <Header activePage={activePage}/>
                {/* <h1>hammaga salom</h1> */}
                <Switch>
                    <Route exact path="/tickets" component={TicketsItem}/>
                    <Route path="/overview" component={Overview}/>
                    <Route path="/subscription" component={Subscription}/>
                    <Route path="/agents" component={Agents}/>
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