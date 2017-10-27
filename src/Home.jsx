import React, { Component } from 'react';
import './App.css';

/**
 * Home Component
 */
class Home extends Component {
  constructor(props) {
      super(props);
    console.log("inhome")
  }
  render(){ return(    
                <h1>routed page</h1>
      )
  }
}


export default Home;
