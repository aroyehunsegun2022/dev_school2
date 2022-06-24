
import React from 'react'
import "./Course.css"
import htmlcss from "../assets/coding.png";
import apps from "../assets/app-development.png"
import idcard from "../assets/id-card.png";
import pythons from '../assets/python.png';
import sqls from "../assets/database-storage.png";
import javas from "../assets/js-format.png";


function Course() {
  return (
    <main>
        <div id="coursemodules"> 
      <h1>Course Modules</h1>
      <p id="toppara">
        Our curriculum produces high quality software developers within the
        shortest possible time even with little or no prior knowledge in
        software development:
      </p>

      <div className="row" >
        <div className="col-4">
          <img src={htmlcss} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">HTML and CSS</span>
          <p className="paras">
            {" "}
            In this module, you will learn
            <br /> how to create web pages and <br /> define its presentation to
            the <br />
            browsers and 

            <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
        
          </p>
        </div>

        <div className="col-4">
        <img src={javas} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">Javascript, Jquery and React JS</span>
          <p className="paras">
            {" "}
            Here, you learn how to build interactive and engaging applications. <br/>   <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
          </p>
        </div>

        

        <div className="col-4">
        <img src={sqls} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">Database with MySQL</span>
          <p className="paras">
            {" "}
            You learn to design and model <br/>database   using ER Diagram and <br/>ultimately using SQL statements.<br/>  <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
          </p>
        </div>
      </div>


      <div className="row">
        <div className="col-4">
          <img src={pythons} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">PHP/Python</span>
          <p className="paras">
            {" "}
            Learn PHP/PYHON Programming and develop <br/>web application Using the Laravel/Flask <br/>Framework.
            <br/> <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
          </p>
        </div>

        <div className="col-4">
        <img src={apps} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">Mobile App development</span>
          <p className="paras">
            {" "}
            In this module, you will learn
            <br /> how to build mobile applications <br /> using required technologies <br />
            <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
          </p>
        </div>

        

        <div className="col-4">
        <img src={idcard} alt="htmlcss" className="iconsprogramming"></img>
          <span className="headings">Internship/Job</span>
          <p className="paras">
            {" "}
            High performing individuals who <br/> have taken in knowledge and <br/> demonstrated such after the <br/> completion of the course would be <br/>
            offered instant employments.
            <br/>   <a
                  className="App-link"
                  href="https://medium.com/@o.aroyehun/our-course-outline-6db3ec837311"
                  target="_blank"
                  rel="noopener noreferrer"
            > 
            <br />know more 
            </a>
          </p>
        </div>
      </div>
    </div>
    </main>
  )

}

export default Course