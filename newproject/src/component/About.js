import React from "react";
import Staff from "./svg/staff.jpeg"
import SameProps from "./SameProps"
const About = () => {
  return (
    <>
    <SameProps name={"Welcome to about pages"}
    visit="/Contact" btnClasses={"About Details"}
    imgSrc={Staff}
    details={"Include the basics of your business, such as the origin, name, location, business structure, management, number of employees and hours of operation. It can also be helpful to categorize your business in a specific industry to provide context for the reader"}/>
    </>
  );
};
export default About;
