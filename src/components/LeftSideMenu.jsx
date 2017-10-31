import React from 'react';
import { Link } from 'react-router-dom'
import '../style/App.css';

/**
 * App Left Menu Component
 */
class LeftSideMenu extends React.Component {
  render() {
    return(    
       <div className = "App-left-menu">
       <nav className="hidden-xs-down bg-faded sidebar">
          <ul className="nav flex-column">
            <li className="nav-item active" >
              <Link to="/home" className="nav-link active">Home</Link>              
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link active">About US</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftSideMenu;

