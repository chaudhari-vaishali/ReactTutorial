import React, { Component } from 'react';
import UserDetails from './UserDetails.jsx';
/**
 * App Component
 */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={counter:0};
    this.updateCounter = this.updateCounter.bind(this);
    this.getTableData = this.getTableData.bind(this);
    this.tableData = [];
    this.getTableData();

  }

  /**
   *  Update Counter 
   */
  updateCounter(){
    this.setState({counter:this.state.counter+1});   
  }

  /**
   * Get table data through local storage
   */
  getTableData(){
    this.tableData = localStorage.getItem("userDetails");
    // console.log("get localStorage UserDetails", JSON.parse(this.tableData));
  }

  /**
   * Render UI for User Application
   */
  render() {
    return(
    <div>
      <h1> {this.state.counter}</h1>
      <UserDetails triggerCounter={this.updateCounter} tableInputData={this.tableData}/>      
    </div>
    );
  }
}

export default Contact;