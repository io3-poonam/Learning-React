import React from "react";
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <>
    <footer >
    <div className="w-100 bg-body-tertiary bg-light  text-center   bottom-0 "> <p> Copyright &#169; {year} Techno Graphy All Right Reserved | Term and Condition</p>
    </div> </footer>
    </>
  );
};
export default Footer;
