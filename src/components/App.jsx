import React, { Component } from 'react';
import '../style/App.css';
import LeftSideMenu from './LeftSideMenu.jsx';
import {Route, Switch, withRouter} from 'react-router-dom';

import AboutUs from './AboutUs.jsx';
import Contact from './ContactUs.jsx';
import Home from './Home.jsx';

/**
 * App Component
 */
class App extends Component {
  /**
   * Render UI for User Application
   */
  render() {
    return (
      <div className="App">
        <div className="row">
          <header className="col-12 App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2">
            <LeftSideMenu />
          </div>
          <div className="col-10 col-sm-10 col-sm-10 right-container">
            <div className="row">
              <Switch>
                <Route exact path='/home' component={Home}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/aboutus' component={AboutUs}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(App);