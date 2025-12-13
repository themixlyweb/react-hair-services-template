import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ smallHeading, bigHeading, image }) => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={`header-wrapper ${!image ? "no-image" : ""}`}>
        {/* NAVBAR */}
       <nav className="header-nav">
  <Link to='/' className="logo-link"><div className="header-logo">TheHairEdit</div></Link>

  <ul className="header-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href='/apt'>Book Appointment</a></li>
  </ul>

  {/* HAMBURGER BUTTON */}
  <div
            className="header-menu-icon"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </div>
</nav>

<div className={`mobile-sidebar ${open ? "open" : ""}`}>
  
  {/* LOGO */}
  <div className="sidebar-logo">TheHairEdit</div>

  {/* NAV LINKS */}
  <div className="sidebar-links">
    <a href="/">Home</a>
    <a href="/about">About us</a>
    <a href="/services">Services</a>
    <a href="/gallery">Gallery</a>
    <a href="/apt">Book Appointment</a>
  </div>

  {/* CONTACT DETAILS */}
  <div className="sidebar-footer">
    <p>📞<a href="tel:+919876543210">+91 9876543210</a></p>
    <p>📧  <a href="mailto:email@gmail.com">email@gmail.com</a></p>
  </div>
</div>

{/* DARK OVERLAY (click to close) */}
<div
  className={`sidebar-overlay ${open ? "show" : ""}`}
  onClick={() => setOpen(false)}
></div>
        {/* HEADINGS */}
         <motion.h1
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.3 }}
                     viewport={{ once: true }}
                   >
                     <div className="special-heading-wrapper">
                      {smallHeading}
                     
                       <motion.span
                         className="heading-line"
                         initial={{ width: 0 }}
                         whileInView={{ width: "120px" }}
                         transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                       ></motion.span>
                     </div>
         
                     
                     <motion.div
                       className="main-title"
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
                     >
                      {bigHeading}
                     </motion.div>
                   </motion.h1>

    

        {/* IMAGE */}
        {image && (<motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header-image-container"
        >
          <img src={image} alt={`${smallHeading}" "${bigHeading}`} className="header-image" />
        </motion.div>)}

      </div>
    </>
  );
};

export default Header;
