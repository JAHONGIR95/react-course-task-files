import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';


import Home from './Pages/Home';
import Master from './Pages/Master';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

import './containers/main.scss';

function App() {

    const [sidebarState, setSidebarState] = useState(false)

    return (
        <Router>
            <Header sidebarState={sidebarState} setSidebarState={setSidebarState} />
            <Sidebar sidebarState={sidebarState} />

            <Switch>
                <div className="main-section">
                    <Route exact path="/" component={Home} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/master" component={Master} />
                    <Route path="/about" component={About} />
                </div>
            </Switch>
            
        </Router>
    )
}

export default App
