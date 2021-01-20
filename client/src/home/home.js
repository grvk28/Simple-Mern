//import React from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';
import React, { Component } from 'react';
import Select from 'react-select';
//import './App.css';
//import home from './home/home';
import Input from '../input/input';
import {BrowserRouter, Link,Route,Router,Switch}  from 'react-router-dom';



class Home extends Component
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
     <div class="content">
            <img src="./img/wave.svg" />
            <h1>DREAM Colleges Waiting For You!</h1>
            <p>
                Search and knowing about your dream colleges is now easier than ever. Just browse a college and know details if your need to.
            </p>

            <a class="btn" href="#">Get Started</a>
        </div>

        <div class="companies">
            <img src="./img/companies.svg" />
        </div>
    </div>

    <div class="categories">
        <h2>Browse Colleges By Category</h2>

        <div class="cards-container">
            <a href="#">
                <div class="card">
                    <div class="anchor anchor-blue">
                        <img class="anchor-icon" src="./img/001-vector-design.svg" />
                    </div>
                    <h3>
                        Design & <br /> Development
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#">
                <div class="card">
                    <div class="anchor anchor-red">
                        <img class="anchor-icon" src="./img/002-flask.svg" />
                    </div>
                    <h3>
                        Science & <br /> Technologies
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#">
                <div class="card">
                    <div class="anchor anchor-yellow">
                        <img class="anchor-icon" src="./img/004-desk.svg" />
                    </div>
                    <h3>
                        Office <br /> Administrative
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#">
                <div class="card">
                    <div class="anchor anchor-yellow">
                        <img class="anchor-icon" src="./img/003-office-building.svg" />
                    </div>
                    <h3>
                        Property <br /> Development
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#">
                <div class="card">
                    <div class="anchor anchor-blue">
                        <img class="anchor-icon" src="./img/006-briefcase.svg" />
                    </div>
                    <h3>
                        Business <br /> Development
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#">
                <div class="card">
                    <div class="anchor anchor-red">
                        <img class="anchor-icon" src="./img/005-clipboard.svg" />
                    </div>
                    <h3>
                        Admin & <br /> Accountant
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <a href="#" id="more">
                <div class="card hidden">
                    <div class="anchor anchor-red">
                        <img class="anchor-icon" src="./img/005-clipboard.svg" />
                    </div>
                    <h3>
                        Design & <br /> Development
                    </h3>
                    <p>
                        Design & Development loremdolor sit<br /> amet, consetetur sadipscing elitr, sed<br /> diam nonumy.
                    </p>
                </div>
            </a>

            <div id="expand">
                <a class="btn" onclick="toggleCategories()">See All Categories</a>
            </div>

         
        </div>
    </div>

    <div class="section">
        <div class="content">
            <h1>
                Build and Boost<br /> your Great Profile
            </h1>

            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.
            </p>

            <br />
            <a class="btn" href="#">Register Now</a>
        </div>
        <div class="poster">
            <img src="./img/team.png" />
        </div>
    </div>

    <div class="section">
        <div class="poster slide-poster">
            <img src="./img/profile-yellow.png" />
        </div>
        <div class="poster slide-poster">
            <img src="./img/profile-red.png" />
        </div>
        <div class="poster slide-poster">
            <img src="./img/profile-blue.png" />
        </div>
        <div class="content slide-content">
            <h1>
                What's our <br /> Collegeseekers Said.
            </h1>

            <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"
            </p>

            <h2>Erik Shannon</h2>
            <h3>React Developer</h3>

            <div class="slide-btns">
                <div class="move prev" onclick="plusSlides(-1)">&#x2039;</div>
                <div class="move next" onclick="plusSlides(1)">&#x203A;</div>
            </div>
        </div>
        <div class="content slide-content">
            <h1>
                What's our <br /> Collegeseekers Said.
            </h1>

            <p>
                "Using, dreamCollege, I got chance for the intership of the fyle. diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"
            </p>

            <h2>Gaurav Kumar</h2>
            <h3>Front-end Developer</h3>

            <div class="slide-btns">
                <div class="move prev" onclick="plusSlides(-1)">&#x2039;</div>
                <div class="move next" onclick="plusSlides(1)">&#x203A;</div>
            </div>
        </div>
        <div class="content slide-content">
            <h1>
                What's our <br /> Collegeseekers Said.
            </h1>

            <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores"
            </p>

            <h2>Minda Shamson</h2>
            <h3>Full-stack Developer</h3>

            <div class="slide-btns">
                <div class="move prev" onclick="plusSlides(-1)">&#x2039;</div>
                <div class="move next" onclick="plusSlides(1)">&#x203A;</div>
            </div>
        </div>
    </div>

    <div class="section last-section">
        <form class="subscribe">
            <h1>Subscribe to Our Newsletter for the Weekly Updates.</h1>

            <div class="input-box">
                <input type="text" placeholder="Enter your email address here" name="email" />
                <button type="submit">Subscribe</button>
            </div>
        </form>
    </div>


    <div class="footer">
        <div class="footer-list">
            <h3>Categories</h3>
            <ul>
                <li>
                    <a href="#">Content Writer</a>
                </li>
                <li>
                    <a href="#">Backend Developer</a>
                </li>
                <li>
                    <a href="#">Creative Director</a>
                </li>
                <li>
                    <a href="#">UI/UX Designer</a>
                </li>
            </ul>
            <a href="#" class="highlight">More...</a>
        </div>

        <div class="footer-list">
            <h3>Resources</h3>
            <ul>
                <li>
                    <a href="#">Contact & Support</a>
                </li>
                <li>
                    <a href="#">Application</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
            </ul>
        </div>

        <div class="footer-list">
            <h3>Company</h3>
            <ul>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">College Seminar</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </div>

        <div class="footer-list">
            <h3>Legals</h3>
            <ul>
                <li>
                    <a href="#">Copyright</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Disclaimer</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
            </ul>
        </div>

        <div class="aboutus">
            <h3>DREAMCollege.</h3>
            <p>
                Design & Development loremdolor sit amet, <br /> consetetur sadipscing elitr, sed diam nonumy.
            </p>

            <ul>
                <li>
                    <a href="#"> <img src="./img/twitter.svg" /> </a>
                </li>
                <li>
                    <a href="#"> <img src="./img/gp.svg" /> </a>
                </li>
                <li>
                    <a href="#"> <img src="./img/fb.svg" /> </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="copyright">Copyright © 2020 DREAMCollege. All rights reserved.</div>
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


export default Home;

