import React, { Component, useState, setState, useRef, ReactDOM } from "react"
import emailjs, { init } from "@emailjs/browser"
import { FormControl, FormGroup } from "react-bootstrap";
import "./Contact.css"



function Contact() {
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

  return (
    <main className="row">

      <div className="col-4" id="inquiries">
        Please fill the Form and Send <br/> Us Your Inquiries. We <br/>will get back to you. 
      </div>
       <div className="col-6">
              <div className="container">
                <div id="nextbatch">
                  <h2 id="nbatch">Leave Us A Message</h2>
                  
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
                      placeholder="Your Questions or Inquiries"
                      name="message"
                    />
   
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
                          Message Sent
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
    </main>
  )
}


export default Contact