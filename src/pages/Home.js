import React, { Component, useState, setState, useRef, ReactDOM } from "react";
import "./Home.css";
import Pic from "../assets/pic.jpeg";
import Icon from '../assets/icon1.png'
import { FormControl, FormGroup } from "react-bootstrap";
import emailjs, { init } from "@emailjs/browser"
import Iconns from '../assets/subject_icon1.png'
import { Carousel } from "react-bootstrap";
import trial from "../assets/trial.jpeg";
import Students from '../assets/ssetrr.jpeg'
import Students2 from '../assets/studentscc.jpeg'





function Home() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);

  init("lPfQYUGxDsAb7SCs6G78H");
  const form = useRef();


    // const handleSubmit =(e) =>{
    //   e.preventDefault();
    //   const forms = {fullname,email, message, phone};
      
      
    // }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        setIsPending(true);
        setFullname('');
        setMessage('');
        setEmail('');
        setPhone('');
       
        emailjs.sendForm("service_9qkv5ja", "template_5a42cnp", form.current, "0IeeBbr6gzNfBjQUK").then(
          (result) => {
         
            console.log(result.text);
            setIsPending(false);
          },
          (error) => {
            console.log(error.text);
          }
        );  // Sends the email
  
  
        // emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        // .then((result) => {
        // alert("Message Sent, We will get back to you shortly", result.text);
        // },
        // (error) => {
        // alert("An error occurred, Please try again", error.text);
        // });
        };
        function changeBackgroun(e){
            e.target.style.backgroundColor = '#0CB582';
        }
        function changeBackground(e){
            e.target.style.backgroundColor = '';
        }


  return (
    <main>
      <div className="container">
        <div id="HeaderContent">
          <div className="row">
            <div className="col-12" id="headercontent">
              <h1 id="header1">Lifelong Learning in the Age of Automation.</h1>
              <p id="paragr">
                Start one of our high quality courses from the world's leading
                experts today!
              </p>
              <img id="imageheader" src={Pic} alt="" />
            </div>
          </div>
        </div>
        <div id="SecondBody">
          <div className="row" id="secondbodycl">
            <div className="col-4" id="upfirstcontent">
              <h2 id="subtopic">
                We are Dev_School. <br /> A learning community.
              </h2>
              <p id="contentSecondb">
                At Dev_School, we believe everyone should <br /> have the
                opportunity to create progress <br />
                through technology and develop the <br />
                skills of tomorrow. With assessments, <br />
                learning paths and courses authored <br />
                by industry experts.
              </p>
            </div>

            <div className="col-1">
              <div className="boxes">
                <img className="iconss" src={Icon} alt="" />
                <span className="firstIcon">200+</span>
                <br />
                <span className="secondTopics">Topics</span>
              </div>
            </div>
            <div className="col-1">
              <div className="boxes">
                <img className="iconss" src={Icon} alt="" />
                <span className="firstIcon">Award</span>
                <br />
                <span className="secondTopics">Winner</span>
              </div>
            </div>
            <div className="col-1">
              <div className="boxes">
                <img className="iconss" src={Icon} alt="" />
                <span className="firstIcon">347</span>
                <br />
                <span className="secondTopics">Student Graduated.</span>
              </div>
            </div>
            <div className="col-5">
              <div className="container">
                <div id="nextbatch">
                  <h2 id="nbatch">Register for Next Batch.</h2>
                  
                  <p id="infotext">Next Cohort Starts: 11/July/2022.</p>
                  <p id="infotext">Program Fees: #200,000 (Installmental Payment is Allowed). </p>
                  <form onSubmit={handleSubmit} ref={form}>
                    <FormControl
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      type="text"
                      required
                      placeholder="FullName"
                      name="fullname"
                    />{" "}
                    <br />
                    <FormControl
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      required
                      placeholder="Phone No"
                      name="phone"
                    />{" "}
                    <br />
                    <FormControl
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      required
                      placeholder="Email Address"
                      name="email"
                    />{" "}
                    <br />
                    <FormControl
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      as="textarea"
                      rows={3}
                      placeholder="Anything you would like us to know"
                      name="message"
                    />
                    <label>
                      Classes are from Monday to Friday, 9am - 3pm (12 Weeks)
                    </label>{" "}
                    <br />
                    {!isPending && (
                      <button
                        type="submit"
                        id="submits"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    )}
                    {isPending && (
                      <button
                        disabled
                        type="submit"
                        id="submits"
                        className="btn btn-primary"
                      >
                        Your Form Has Been Submitted
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="thirdbody">
      <div id="thirdbg">
        <h2 id="textcourse">Popular Courses</h2>
    {/* first set of icons  */}
      <div className="row">
        <div className="col-4">
            <div  className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground} id='thirdbxesagain'>
                <img className="iconinside" src={Iconns} alt=""/>
                <span className="textsss">React</span><br/>
               
            </div> 
        </div>
        <div className="col-4"><div className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground}>
                <img className="iconinside" src={Iconns}  alt=""/>
                <span className="textsss">Python</span><br/>
               
            </div> 
            </div>
        <div className="col-4"><div className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground}>
                <img className="iconinside" src={Iconns}  alt=""/>
                <span className="textsss">MySql</span><br/>
               
            </div> 
            </div>
      </div>

    {/* second set of icons  */}


    <div className="row">
        <div className="col-4">
            <div className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground}>
                <img className="iconinside" src={Iconns}  alt=""/>
                <span className="textsss">Flask</span><br/>
               
            </div> 
        </div>
        <div className="col-4"><div className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground}>
                <img className="iconinside" src={Iconns}  alt=""/>
                <span className="textsss">PHP</span><br/>
               
            </div> 
            </div>
        <div className="col-4"><div className="thirboxes" onMouseOver={changeBackgroun} onMouseLeave={changeBackground}>
                <img className="iconinside" src={Iconns}  alt=""/>
                <span className="textsss">Laravel</span><br/>
               
            </div> 
            </div>
      </div>



    </div>

        

      </div>

      <div id="studentsaid">
      <div id="carousells">
      <h2 id="h2edit">  Our Alumnis</h2>
      <div>
        <Carousel variant="dark">
          <Carousel.Item id="editstuden">
            <img className="d-block w-100" src={trial} alt="First slide" />
            <Carousel.Caption id="captionss">
              <h5>Olamilekan Femi</h5>
              <p>
                "I was able to have a successful career switch into Tech with
                the help of devschool"
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="editstuden">
            <img className="d-block w-100" src={Students} alt="First slide" />
            <Carousel.Caption id="captionss">
              <h5>Ajetomobi Gbenga</h5>
              <p>
                "I learnt from this school and left the country, a month after i landed my first job as a full stack developer"
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item id="editstuden">
            <img className="d-block w-100" src={Students2} alt="First slide" />
            <Carousel.Caption id="captionss">
              <h5>Raheem Afeez</h5>
              <p>
                "I honestly didn't think i could do this, they taught me about tech and gave me my first internship role"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

      </div>


    </main>
  );
}

export default Home;
