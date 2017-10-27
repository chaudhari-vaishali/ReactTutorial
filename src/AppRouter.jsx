import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import App from './App.jsx';
import Home from './Home.jsx';
import AboutUs from './Home.jsx';
import Contact from './Home.jsx';

const AppRouter = () => (
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/home' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/aboutus' component={AboutUs}/>
     
    </Switch> 
)

export default AppRouter;