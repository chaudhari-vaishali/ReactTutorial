import React from 'react';
import '../style/App.css';

import { withRouter } from 'react-router';


class UserEntryForm extends React.Component {
  constructor(props) {
    super();
    this.state = {errorMsg:'',options:['Pune','Nashik', 'Mumbai']};
  }

  /**
   * [submitDetails description]
   * @return {[type]} [description]
   */
  submitDetails (){
    this.setState({errorMsg: ''});
    if(document.getElementById("first_name").value === '' ||
    document.getElementById("last_name").value === '' ||
    document.getElementById("phone").value === '' ||
    document.getElementById("email").value === '' ||
    document.getElementById("address").value === '')
    {
      this.setState({errorMsg: 'Please enter all fields.'});
      // this.setState.errorMsg = "Please enter all fields.";
      // console.log("if",errorMsg);
      // this.props.bottomUpData(errorMsg);
    }
    else {
      this.setState({errorMsg: ''});
      var dataIn = {
                    first_name : document.getElementById("first_name").value, last_name : document.getElementById("last_name").value,
                    phone : document.getElementById("phone").value, email : document.getElementById("email").value,
                    address : document.getElementById("address").value, city: document.getElementById("city").value
                  }
        // console.log("Test data ++ ", dataIn );
        // console.log("Updated change",this.props)
        this.props.getFormData(dataIn);
    }    
  }
  /**
   * All Field Validation
   * @return {[type]} [description]
   */
  validation(){

  }
  /**
   * resetForm
   * @return all field get reset
   */
  resetForm () {
    document.getElementById("first_name").value = '';
    document.getElementById("last_name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';
    document.getElementById("address").value = '';
    document.getElementById("city").value = '';
  }

  /**
   * Render User entry form
   */
  render() {
    var options = this.state.options.map(function(option,index) {
          return (
                  <option value={option} key={index}>{option}</option>
                  ) 
        });
    return(    
       <div className = "form-group  text-left">
       <h4 className="error-msg">{this.state.errorMsg}</h4>
        <label className="col-12 text-left">First Name: </label>
        <input className="form-control" type="text" id="first_name" name="first name" placeholder="First Name" value={this.props.first_name} required/><br />
        <label className="col-12 text-left">Last Name:</label>
        <input className="form-control" type="text"  id="last_name" name="last name" placeholder="Last Name"  value = {this.props.last_name} required/><br />
        <label className="col-12 text-left">Phone Number:</label>
        <input className="form-control" type="number"  id="phone" name="phone number" placeholder="Phone" value = {this.props.phone} required/><br />
        <label className="col-12 text-left">Email:</label>
        <input className="form-control" type="email"  id="email" name="email" placeholder="Email" value = {this.props.email} required/><br />
        <label className="col-12 text-left">Address:</label>
        <textarea className="form-control" id="address" name="Address" placeholder="Address" value = {this.props.address}/><br />
        <label className="col-12 text-left">City:</label>
        <select name="city" value={this.props.city} className="form-control form-select" id="city">
          <option value="">Select City</option>
          {options}
        </select> <br />
        <button className="btn btn-primary btn-md col-md-4" onClick={()=>this.submitDetails()}>Submit</button>
        <button className="btn btn-warning btn-md col-md-4 margin-left-1" onClick={()=>this.resetForm()}>Reset</button>
        
      </div>
    )
  }
}

export default  withRouter(UserEntryForm);