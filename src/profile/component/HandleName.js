import React, { Component } from 'react';
// import FullName from './FullName';


class HandleName extends Component {
  
    handleEvent = () => {
      
      
     
      alert(`${"Aziz Mlika"}`);
    };
  
    render() {
      return (
        <button  onClick={this.handleEvent}>Click here</button>
      );
    }
  }
  
 
  
  export default HandleName;