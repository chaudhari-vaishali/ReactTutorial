import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import App from './components/App.jsx';

const app = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <App></App>
    </Switch>
  </Router>
  , app);

registerServiceWorker();