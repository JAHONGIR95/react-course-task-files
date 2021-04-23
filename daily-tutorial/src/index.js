import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Sidebar />
  </React.StrictMode>,
  document.getElementById('root')
);