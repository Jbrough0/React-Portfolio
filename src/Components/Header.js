import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (<div><h1>Josh's Portfolio</h1>
       
      
             
           
             <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
             </ul>
       


       </div>
    );
  }
}
