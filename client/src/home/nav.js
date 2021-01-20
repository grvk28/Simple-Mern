//import React from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import React, { Component } from 'react';
import Select from 'react-select';
//import {connect} from 'react-redux'
//import './App.css';
//import home from './home/home';
//import Input from '../input/input';
import {BrowserRouter, Link,Route,Router,Switch}  from 'react-router-dom';




class Nav extends Component
{
constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

render() {
  let url="";
  return (
      
      
    <div className="App">
      <header className="App-header">
      </header>

      <head>
    <title>DreamCollege.</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <link rel="icon" href="./img/download.png" type="image/x-icon" />
    <link rel="stylesheet" href="Style.css" />
</head>

<body>
<p className="App-intro">{this.state.apiResponse}</p>
    <div class="banner">
      <div class="navbar"><BrowserRouter>
            <ul class="navlinks">
                <a href='#' class="megaicon">DREAMColleges.</a>
                <li><Link to="/home">Home</Link></li>
                <li><a href="#">Admissions Started</a></li>
            </ul>
            
            <div class="navbtns">
            <div class="search-box">
                <input type="text" placeholder="Search a College" name="college"  />
                <button type="submit">Search</button>
            </div>
            
             <Link to="/in" class="navbtn light" >Input </Link>
             
                
                
                <a class="navbtn dark">Resume</a>
            </div></BrowserRouter>
            
        </div>
        
      </div>
</body>
    </div>
    
    
  );
}
}

const aquaticCreatures = [
  { label: 'Shark', value: 'Shark', onChange:'http://google.com' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];


export default Nav;

