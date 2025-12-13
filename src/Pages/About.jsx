import React from "react";
import Header from "../Components/Header";
import heroImg from '../Images/about-intro.webp';

const About=()=>{
    return(
        <>
        <Header
         smallHeading="About"
  bigHeading="OUR HAIR STUDIO"
  image={heroImg} />
        </>
    )
}

export default About;