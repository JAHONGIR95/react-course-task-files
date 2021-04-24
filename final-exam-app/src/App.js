import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './containers/Header/index';
import HeaderNavbar from './components/HeaderNavbar/';

import '../src/assets/styles/App.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <Header logoText="salo" navbar={<HeaderNavbar />}/>
        <h1>App js</h1>
      </div>
    </Router>
  )
}

export default App
