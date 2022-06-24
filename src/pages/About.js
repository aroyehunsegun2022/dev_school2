import React from "react";
import download from "../assets/download.jpeg"
import "./About.css"

function About() {
  return (
    <main>
      <h2 id="headerabout">Raising Future Leaders</h2>
      <div className="row">
        <div className="col-4">
          <img src={download} alt="individual" id="imagesedi"></img>
        </div>
        <div className="col-5">
          <p id="textscont">We understand the importance of education, especially techinical education and 
          in the world of technological innovations and development, what better skills to acquire than
          technological skills. In lieu of this, we have taken it upon ourselves to breed the next generation
          of technological experts that would lift themselves and our nation out of poverty by 
         using technology to solve societal problems. 
         We intend to equip individuals and arm them with techinical-know-how, this way, they can make 
         a living for themselves and be useful to society at large. 


          </p>

          
        </div>
        <div className="col-3"></div>
      </div>
    </main>
  );
}

export default About;
