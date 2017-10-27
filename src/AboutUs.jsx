import React, { Component } from 'react';
import './App.css';
import UserEntryForm from './UserEntryForm.jsx';
import UserDetails from './UserDetails.jsx';

/**
 * App Component
 */
class AboutUs extends Component {
  constructor() {
      super();
      console.log("inabout");
      this.state = {formData:{first_name:'', last_name:'', phone:'', email:'', address:'', city:''}, userDetails:[]};
      this.checkUserUpdate.bind(this);
      this.updateDetails.bind(this);
  }

  /**
   * CheckCall
   * @param  {[type]} test [description]
   * @return {[type]}      [description]
   */
  checkUserUpdate = (test) => {
    // console.log("Checking call back is working", test);
    this.setState({formData:{first_name:test.first_name, last_name:test.last_name}});
    this.updateDetails(test)
  }

  /**
   * controls the update user details action
   * @param  {[type]} test [description]
   * @return {[type]}      [description]
   */
  updateDetails = (test) => {
    this.state.userDetails.push(test);
    this.setState({userDetails: this.state.userDetails});    
    // console.log("in update UserDetails", this.state.formsData);
  }

  /**
   * Render UI for User Application
   */
  render() {
    return(
    <div>
      <div className="col-3 col-sm-3 col-md-3">
        <UserEntryForm topDownData={this.state.formData.first_name 
      + ' ' +this.state.formData.last_name} bottomUpData={this.checkUserUpdate} />
      </div>          
      <div className="col-7 col-sm-7 col-md-7">
        <UserDetails topDownrows={this.state.userDetails} />
      </div>
    </div>
    );
  }
}

export default AboutUs;