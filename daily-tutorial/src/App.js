import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

function App() {

    const [sidebarState, setSidebarState] = useState(false)

    return (
        <Router>
            <Header sidebarState={sidebarState} setSidebarState={setSidebarState} />
            <Sidebar sidebarState={sidebarState} />
        </Router>
    )
}

export default App
