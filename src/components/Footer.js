import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import logos from '../assets/dev_logo.png'
import "./Footer.css"
import phone from "../assets/phone-call.png"
import eaddress from "../assets/email.png"
import address from "../assets/address.png"


function Footer() {
  return (
    <main>

        <div id='footers' className='row'>
          <div className='col-4'>
        <h3 id='footernote'>Dev_School</h3>
        <p id='footernote'>At Dev School, we seek to beautify <br/>and secure businesses using Information 
        <br/>Technology, with quality and security <br/>in mind. We make it our passion and are  <br/>committed towards raising world  <br/>class developers.
         <br/></p>
         </div>

          <div className='col-4'>
        <h3>Contact Us</h3>
        <img src={phone} alt='phonecall' className='logoimages'></img> <span>08136811613</span> <br/><br/>
        <img src={eaddress} alt='eaddress'  className='logoimages'></img> <span>info@devschool.site</span> <br/><br/>
        <img src={address} alt='address'  className='logoimages'></img> <span>38 Agbebi Street, Surulere. Lagos</span>



          </div>
    
         
         {/* links to social media  */}

<div className="col-4" id="imagesbox">
  <a
    className="App-link"
    href="https://twitter.com/eindustriesHq?s=20&t=GIdrvjW29JISKZh6rrGhUw"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={twitter} alt="twitter" className="ftimages" />
  </a>

   <a
    className="App-link"
    href="https://www.linkedin.com/company/78310105/admin/"
    target="_blank"
    rel="noopener noreferrer"
  >
  <img src={linkedin} alt="twitter" className="ftimages" />
  </a>

  <a
    className="App-link"
    href="https://twitter.com/eindustriesHq?s=20&t=GIdrvjW29JISKZh6rrGhUw"
    target="_blank"
    rel="noopener noreferrer"
  >
  <img src={instagram} alt="twitter" className="ftimages" />
  </a>

  <a
    className="App-link"
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
  <img src={facebook} alt="twitter" className="ftimages" />
  </a>
</div>

        </div>
    </main>
  )
  
}

export default Footer

