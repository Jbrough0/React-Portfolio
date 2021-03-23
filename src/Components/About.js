import React, { Component } from 'react';
import annie from  './imgs/annie.jpg'
export default class About extends Component {
  render() {
   let resumeData = this.props.resumeData;
   
    return (<h1>My name is Josh Broughton

      I am an actor and editor and I am interested in audio engineering. I am a graduate of Butler High School and I recevied an associate in arts at CPCC in May 2019
      
      I am interested in coding and I am taking this class to become a better coder. Although I had some trouble with coding while taking an e-commerce class in high school, I believe that this bootcamp will give me a better understanding of coding and that I will be on my way to becoming a better coder after the bootcamp.</h1>
      
      // <section id="about">
      //    <div className="row">

      //       <div className="three columns">

      //          <img className="profile-pic"  src="https://raw.githubusercontent.com/Jbrough0/Portfolio/master/assets/imgs/annie.jpg"  rel="noreferrer" alt="" />

      //       </div>

      //       <div className="nine columns main-col">

      //          <h2>About Me</h2>
      //          <p>
      //          {
      //            resumeData.aboutme
      //          }
      //          </p>

      //          <div className="row">

      //             <div className="columns contact-details">

      //             <h2>Contact Details</h2>
      //             <p className="address">
      //  						<span>{resumeData.name}</span>
      //                <br></br>
      //  						   <span>
      //                {resumeData.address}
      //               </span>
      //               <br></br>
      //               <span>{resumeData.website}</span>
      //  					   </p>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </section>
      
    );
  }
}
<img src={annie} alt="picture with annie"/>