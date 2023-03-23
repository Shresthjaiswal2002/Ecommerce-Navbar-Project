import React from "react";
import { Link } from "react-router-dom";
import "./About.css"
function About() {
  return (
    <div>
      <h1 className="head">
        This is an Ecommerce Website made By Shresth Jaiswal for submitting the
        Project of navbar!!
      </h1>
      <h2 className="head2">For any other information you can contact me on the below!!</h2>
      <div className="button1">
      <Link to="https://github.com/Shresthjaiswal2002"><button id="github">Github</button></Link>
      <Link to="https://www.linkedin.com/in/shresth-jaiswal-8bab7a246/"><button id="linkdin">Linkdin</button></Link>
      <Link to="/contact"><button id="Contact">Contact Us</button></Link>
      </div>
    </div>
  );
}

export default About;
