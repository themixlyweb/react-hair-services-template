import React, { useEffect, useState } from "react";
import {motion } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import hero1 from "../Images/hero-1.webp";
import hero2 from "../Images/hero-2.webp";
import hero3 from "../Images/hero-3.webp";

//Component Imports
import AboutHairStudio from "../Components/AboutHairStudio";
import ServiceCards from "../Components/ServiceCards";

const Home = () => {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showHeader, setShowHeader] = useState(false);

useEffect(() => {
  const trigger = document.getElementById("hero-end-trigger");
  if (!trigger) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // When hero END is visible → header should NOT show
      // When hero END is NOT visible → header should show
      setShowHeader(!entry.isIntersecting);
    },
    {
      threshold: 0,      // Fires as soon as trigger leaves viewport
      rootMargin: "0px 0px -90% 0px", 
      // pushes trigger earlier/later depending on screen height
    }
  );

  observer.observe(trigger);

  return () => observer.disconnect();
}, []);


  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
    {/****** HERO SECTION WITH SIDE NAVBAR ******/}
      <section className="hero-container">
      {/* LINE DECOR */}
      <div className="line-wrapper">
        <div className="white-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/*<div className="logo-menu-wrapper">
         <Link to='/' className="logo-link"> <motion.h2 className="logo">TheHairEdit</motion.h2></Link>
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </div>*/}

        <div className="the-line-wrapper">
          <motion.p className="sub-title">The</motion.p>
          <span className="title-line"></span>
        </div>

        <div className="width-wrapper">
        <motion.h1 className="title">HAIR STUDIO</motion.h1>

        <motion.p className="description">
          Welcome to The Hair Studio, where style meets sophistication. 
          Our expert stylists specialize in transforming your look with precision 
          cuts, vibrant colors, and personalized care. Step into a space designed 
          for comfort and creativity — where every detail is crafted to make you 
          feel confident, refreshed, and effortlessly beautiful.
        </motion.p>

        <motion.button
          className="services-btn"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/services">VIEW SERVICES</Link>
        </motion.button></div>
      </motion.div>

      {/* MOBILE SIDEBAR */}
<div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
  <div className="sidebar-logo">TheHairEdit</div>

  <div className="sidebar-links">
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/services">Services</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/apt">Book Appointment</Link>
  </div>

  <div className="sidebar-footer">
    <p>📞<a href="tel:+919876543210">+91 9876543210</a></p>
    <p>📧<a href="mailto:email@gmail.com">email@gmail.com</a></p>
  </div>
</div>

{/* DARK OVERLAY */}
<div
  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
  onClick={() => setSidebarOpen(false)}
></div>


      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt="hero"
      className={`hero-image ${index === i ? "active" : ""}`}
    />
  ))}

        {/* SIDE NAV for large screens */}
        <motion.nav className="side-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/apt">Book Appointment</Link>
        </motion.nav>
  
       
      </motion.div>
      <header className={`fixed-header ${showHeader ? "show" : ""}`}>

  <nav className="header-nav">
    <Link to='/' className="logo-link"><div className="header-logo">TheHairEdit</div></Link>
    <ul className="header-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href='/apt'>Book Appointment</a></li>
  </ul>
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
  
</header>
<div id="hero-end-trigger"></div>
    </section>

      {/****** ABOUT HAIR STUDIO SECTION ******/}
      <AboutHairStudio />

      {/****** SERVICES CARDS SECTION ******/}
      <ServiceCards />
    </>
  );
};

export default Home;
