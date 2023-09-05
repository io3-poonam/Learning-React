import React from "react";
import webHome from "./svg/home.png"
import SameProps from "./SameProps"

const Home = () => {
  return (
    <>
    <SameProps name={"Grow your business with"}
    visit="/Services" btnClasses={"Get Started"}
    imgSrc={webHome}
    details={"We are the team of talented developer making web sites"}/>
   </>);}  
export default Home;
