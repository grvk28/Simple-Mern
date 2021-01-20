//import React from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import Home from './home/home';
import Nav from './home/nav';
import Input from './input/input';
import {BrowserRouter,Link,Route,Router,Switch}  from 'react-router-dom';



class App extends Component
{
constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

render() {
  let url="";
  return (
      <>
      <Nav/>
      <BrowserRouter>
      <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route path="/in" component={Input}/>
          <Route exact path="/home" component={Home}/>
          
          
      </Switch></BrowserRouter>
      </>
    
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


export default App;

