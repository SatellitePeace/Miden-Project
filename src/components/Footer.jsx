import React from "react";
import globeImage from "../assets/images/globeImg.svg";
import InstagramIcon from "../assets/icons/instagramIcon.svg";
import TwitterIcon from "../assets/icons/twitterIcon.svg";
import LinkedInIcon from "../assets/icons/linkedinIcon.svg";
import FooterIcon from "../assets/icons/footerLogo.svg";
import Glow from "../assets/icons/Glow.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
     <div className="footer">
        {/* glow icon */}
        <img src={Glow} alt="glow animation" className="glow-animation" />
         {/* logo */}
      <ul>
       <li> <img src={FooterIcon} alt="footer logo icon" /></li>
        <li><p>Lorem ipsum dolor sit amet consectetur.</p></li>
      </ul>
      {/* company */}
        <ul>
          <li>
            <h5>Company</h5>
          </li>
          <li>
            <a href="https://www.twitter.com">Login</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Sign up</a>
          </li>
          <li>
            <a href="https://www.twitter.com">About Us</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Support</a>
          </li>
        </ul>
      {/* services */}
   
        <ul>
          <li>
            <h5>Services</h5>
          </li>
          <li>
            <a href="https://www.twitter.com">Insurance</a>
          </li>
          <li>
            <a href="https://www.twitter.com">API Docs</a>
          </li>
        </ul>
      {/* socials */}
   
        <ul className="media">
          <li>
            <h5>Social Media</h5>
          </li>
          <li>
            <img src={TwitterIcon} alt="twitter icon" />
     <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <img src={LinkedInIcon} alt="linkedin icon" />
           <span> <a href="https://www.twitter.com">Linkedin</a></span>
          </li>
          <li>
            <img src={InstagramIcon} alt="instagram icon" />
           <span> <a href="https://www.twitter.com">instgram</a></span>
          </li>
        </ul>
      {/* wolrd */}
      <ul className="footerGlobeImg">        
        <li><h5>Miden Presence</h5> </li> 
        <li><img src={globeImage} alt="globe map"  /> </li>  
      </ul>
     </div>
     {/* copyright */}
     <p className="copyright">Copyright @ 2023 Miden is a product of Tyrus Technologies</p>
    </footer>
  );
}

