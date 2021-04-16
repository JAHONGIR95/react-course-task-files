import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'

import {
  Home, 
  Trending,
  WatchLater
} from './pages';

import Sidebar from './containers/Sidebar/Sidebar';

import './assets/styles/App.scss';

function App() {
  return (
    <Router>
      <div className="App">

      <Sidebar />
        <Switch>

          <Route exact  path="/" component={Home}/>
          <Route path="/trending" component={Trending}/>
          <Route path="/watchLater" component={WatchLater}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
