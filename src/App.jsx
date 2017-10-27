import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from './LeftSideMenu.jsx';
// import UserEntryForm from './UserEntryForm.jsx';
// import UserDetails from './UserDetails.jsx';
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
            {this.props.children}             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
