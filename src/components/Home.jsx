import React, { Component } from 'react';
import welcome_img from '../images/welcome_img.png'

/**
 * Home Component
 */
class Home extends Component {
  constructor(props) {
      super(props);
    // console.log("inhome")
  }
  /**
   * Render home page
   */
  render(){ return(
        <div>
          <h1>Welcome to react route.</h1>
          <img src= {welcome_img} alt="welcome_img"/>
        </div>
      )
  }
}


export default Home;
