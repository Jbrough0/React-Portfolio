import React, { Component } from 'react';
import patty from  './imgs/patty.png'
import note from  './imgs/note.png'
export default class Footer extends Component {
  render() {
    //let resumeData = this.props.resumeData;
    return (<div class="Footer">
    <img src={patty} alt="patty"/><h1>Copyright 2021 by Josh Broughton</h1>
    <div class="Footer">
    <img src={note} alt="note"/> </div>
    </div>
    //   <footer>
    //   <div className="row">
    //     <div className="twelve columns">
    //       <ul className="social-links">
    //         {
    //           resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
    //             return(
    //               <li>
    //                 <a href={item.url}>
    //                 <i className={item.className} />
    //                 </a>
    //               </li>
    //             )
    //           })
    //         }
    //       </ul>
          
    //     </div>
    //     <div id="go-top"><a className="smoothscroll" title="Home" href="#home"><i className="icon-up-open" /></a></div>
    //   </div>
    // </footer>
    );
  }
}
