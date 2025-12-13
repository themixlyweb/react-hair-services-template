import React from "react";
import Header from "../Components/Header";
import heroImg from '../Images/gallery-intro.webp';

const Gallery=()=>{
    return(
      <>
        <Header
         smallHeading="Gallery"
  bigHeading="PORTFOLIO"
  image={heroImg} />
  <div className="special-margin-section"></div>
  </>
    )
}

export default Gallery;