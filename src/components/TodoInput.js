import React, { Component } from "react";
import Axios from "axios"
export default class TodoInput extends Component {
  
  render() {
    const { name,email,gender,status, handleChange, handleSubmit, editItem ,handelEdit,handeleUpdate} = this.props;
    return (
      console.log(name,'item', email,'email'),
    
          <div className="input-group">
            
            <input
              name='name'
              type="text"
              className="form-control text-capitalize"
              placeholder="Name"
              value={name}
              
              onChange={handleChange}
              />
             <input
              name='email'
              type="text"
              className="form-control text-capitalize"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
             <input
              name='gender'
              type="text"
              className="form-control text-capitalize"
              placeholder="Gender"
              value={gender}
              onChange={handleChange}
            />
             <input
              name='status'
              type="text"
              className="form-control text-capitalize"
              placeholder="Status"
              value={status}
              onChange={handleChange}
            />
            <button type='submit' className="btn btn-block btn-success mt-3" onClick={handleSubmit}>Create User</button>
          <button type='submit' className="btn btn-block btn-primary mt-3" onClick={handeleUpdate}>Update User</button>
          </div>
          
          
          
           
        
      
    );
  }
}
