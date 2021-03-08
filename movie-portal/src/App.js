import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home,
  Movies,
  TvShow,
  SingleMovie,
  SingleShow
} from './pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/movies" component={Movies}/> 
          <Route exact path="/tv-show" component={TvShow}/> 
          <Route exact path="/movies/:id" component={SingleMovie}/> 
          <Route exact path="/tv-show/:id" component={SingleShow}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
