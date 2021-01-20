//import React from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import React, { Component } from 'react';
import Select from 'react-select';
//import './App.css';
import Home from '../home/home';

const aquaticCreatures = [
  { label: 'Shark', value: 'Shark', onChange:'http://google.com' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];

class Input extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
    state ={
    id:'',
    name:'',
    year:'',
    city:'',
    state:'',
    country:'',
    noofstudents:'',
    courses:''
  };

  handleChange =(event) => {
    const target = event.target;
    const id= target.id;
    const name = target.name;
    const year = target.year;
    const city = target.city;
    const state = target.state;
    const country = target.country;
    const noofstudents = target.noofstudents;
    const courses = target.courses;
    const value = target.value;

    this.setState({
      [name]:value
    
    });
  };

  submit =(event) => {
    event.preventDefault();

    const payload = {
      id:this.state.id,
      name:this.state.name,
      year:this.state.year,
      city:this.state.city,
      state:this.state.state,
      country:this.state.country,
      noofstudents:this.state.noofstudents,
      courses:this.state.courses
    };

    axios({
      url:'/api/save',
      method:'POST',
      data:payload
    })
      .then(()=> {
        console.log('Data sent');
      })
      .catch(()=>{
        console.log('error fuck me');
      });;
      
  };


  render(){
    console.log('State: ', this.state);
    return(
      <div>
        <h2>Welcome Boss</h2>
        <form onSubmit={this.submit}>
        <div className="form-input">
            <input
            type="int"
            name="id"
            placeholder="ID"
            value={this.state.id}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
            type="text"
            name="name"
            placeholder="College Name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
          <input
            type="int"
            name="year"
            placeholder="Year founded"
            value={this.state.year}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
          <input
            type="text"
            name="city"
            placeholder="city"
            value={this.state.city}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
          <input
            type="text"
            name="state"
            placeholder="state"
            value={this.state.state}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
          <input
            type="text"
            name="country"
            placeholder="country"
            value={this.state.country}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input"> 
          <input
            type="int"
            name="noofstudents"
            placeholder="no. of students"
            value={this.state.noofstudents}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
          <input
            type="int"
            name="courses"
            placeholder="Courses"
            value={this.state.courses}
            onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>

          
        </form>
        <div className="App">
      <Select href='http://google.com/value'
        options={aquaticCreatures}
      />
    </div>
        <PieChart
  data={[
    { title: 'google.com', value: 10, color: '#E38627',link:'http://google.com/' },
    { title: 'Two', value: 15, color: '#C13C37',link:"http://google.com/" },
    { title: 'Three', value: 20, color: '#6A2135',link:"http://google.com/",label: "Google" },
  ]}
/>;

      </div>
     
    );
  }
  
}



export default Input;

