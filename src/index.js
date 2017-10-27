import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, Switch} from "react-router-dom";
import createHashHistory from 'history/createHashHistory';

import AboutUs from './AboutUs.jsx';
import App from './App.jsx';
import Contact from './UserDetails.jsx';
import Home from './Home.jsx';

const history = createHashHistory();

const app = document.getElementById('root');
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <App>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/aboutus' component={AboutUs}></Route>
      </App>
    </Switch>
  </Router>
  , app);

registerServiceWorker();