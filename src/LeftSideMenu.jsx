import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

/**
 * App Left Menu Component
 */
class LeftSideMenu extends React.Component {
  render() {
    return(    
       <div className = "App-left-menu">
       <nav className="hidden-xs-down bg-faded sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftSideMenu;

