import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assets/styles/App.scss';

import {
  Home,
  Movies,
  TvShow,
  SingleMovie,
  SingleShow,
  ActorMovie,
  LatestMovie,
  TopMovies,
  UpcomingMovies
} from './pages';

import Header from './containers/Header';
import Footer from './containers/Footer'

function App() {
  return (
    <div>
      <Router>

        <Header/>

        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/movies" component={Movies}/> 
          <Route exact path="/tv-shows" component={TvShow}/> 
          <Route exact path="/movie/:id" component={SingleMovie}/> 
          <Route exact path="/tv-show/:id" component={SingleShow}/> 
          <Route exact path="/person/:id" component={ActorMovie}/> 
          <Route exact path="/latest-movies" component={LatestMovie}/> 
          <Route exact path="/top-movies" component={TopMovies}/> 
          <Route exact path="/upcoming-movies" component={UpcomingMovies}/> 
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
