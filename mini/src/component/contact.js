import React from "react";
import Events from "./Events";
import Clock from "./clock";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const bkPage = () => {
    navigate(-1);
  };
  const aboutPage = () => {
    navigate("/about");
  };
  const ServicePage = () => {
    navigate("/services");
  };
  return (
    <>
      <Events />
      <Clock />
      <button onClick={() => bkPage()}> Back Page</button>
      
      <button onClick={() => aboutPage()}> About Page</button>
      <button onClick={() => ServicePage()}> Services page</button>
    </>
  );
};
export default Contact;
