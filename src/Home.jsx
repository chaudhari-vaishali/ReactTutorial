import React, { Component } from 'react';
import './App.css';
import welcome_img from './welcome_img.png'

/**
 * Home Component
 */
class Home extends Component {
  constructor(props) {
      super(props);
    console.log("inhome")
  }
  render(){ return(
        <div>
          <h1>Welcome to react route.</h1>
          <img src= {welcome_img} alt="welcome_img"/>
        </div>
      )
  }
}


export default Home;
