import { Component } from 'react';
import React from "react";
import './child.css';
class Child extends Component{
    getAlert(){
      alert('clicked alert in child from parent click');
    }
    render(){
      return (
        <h1 className="heading">hello</h1>
      );
    }
  }
  export default Child;