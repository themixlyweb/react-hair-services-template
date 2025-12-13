import React from "react";

import i1 from '../Images/i1.webp';
import i2 from '../Images/i2.webp';
import i3 from '../Images/i3.webp';
import i4 from '../Images/i4.webp';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
  <div className="footer-container">

    {/* INSTAGRAM POP BOX */}
    <div className="footer-insta-pop">
      <h2 className="features-title">
        <div className="the-line-wrapper">
          <div className="gold-script">Follow Us</div>
          <span className="title-line"></span>
        </div>
        <br />
        ON INSTAGRAM
      </h2>

      <div className="insta-grid">
        <img src={i1} alt="follow us on instagram 1" />
        <img src={i2} alt="follow us on instagram 2" />
        <img src={i3} alt="follow us on instagram 3" />
        <img src={i4} alt="follow us on instagram 4" />
      </div>
    </div>

    {/* TWO COLUMNS */}
    <div className="footer-bottom">
      <div className="footer-col">
        <h3>QUICK LINKS</h3>
        <ul>
          <Link to="/"><li>HOME</li></Link>
          <Link to="/about"><li>ABOUT US</li></Link>
          <Link to="/services"><li>SERVICES</li></Link>
          <Link to="/gallery"><li>GALLERY</li></Link>
          <Link to="/apt"><li>BOOK APPOINTMENT</li></Link>
        </ul>
      </div>

      <div className="footer-col">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="tel:+919876543210">+91 9876543210</a></li>
          <li><a href="tel:+919876543210">+91 9876543210</a></li>
          <li><a href="mailto:email@gmail.com">email@gmail.com</a></li>
        </ul>

        <h4 className="work-title">WORK HOURS</h4>
        <p>9:00 AM - 8:00 PM</p>
      </div>
    </div>

  </div>
</footer>

    </>
  );
};

export default Footer;
