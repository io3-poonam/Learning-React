import React from "react";
import "./main.css";
import {  Link, NavLink, useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const NavigateToCountPage = () => {
    navigate("/count");
    console.log("NavigateToCountPage");
  };
  const NavigateToClockPage = () => {
    navigate("/Clock");
  };
  const NavigateToTodoPage = () => {
    navigate("/todo");
  };
  const NavigateFormPage = () => {
    navigate("/form");
  };
  const NavigateEventPage = () => {
    navigate("/event");
  };
   const NavigateToTimeOfDayPage=()=>{
    navigate("timeOfDay")
   }
   const NavigateToGamePage=()=>{
    navigate("game")
   }
   const NavigateToGoogleKeepPage=()=>{
    navigate("googleKeep")
   }
   const NavigateToAccordionPage=()=>{
    navigate("accordion")
   }
   const NavigateToToDoDeletePage=()=>{
    navigate("shopping")
   }
   const NavigateToNamePage=()=>{
navigate("name")
   }
   const NavigateToUseEffectPage=()=>{
    navigate('counting number')
   }
   const NavigateToUseLiveProject=()=>{
    navigate("LiveProject")
   }
   const NavigateToUseMapProject=()=>{
    navigate("Cards")
   }
   const NavigateFilterPage=()=>{
    navigate("filter")
   }
   const NavigateComponentNamePage=()=>{
    navigate("ComponentName")
   }
   const NavigatePokemonPage=()=>{
navigate("pokemon")
   }
  return (
    <>
      <div className="">
        <ul className="Items">
     
          <li onClick={NavigateToCountPage}  className="nav-Items">
          <NavLink className="nav-Items-links" to="/count">  Count</NavLink>
          </li>
          <li onClick={NavigateToTodoPage} className="nav-Items">
            ToDo List
          </li>
          <li onClick={NavigateToToDoDeletePage} className="nav-Items">ToDo Delete Page</li>
          <li onClick={NavigateToNamePage} className="nav-Items">Name Page</li>

          <li onClick={NavigateFormPage} className="nav-Items">Input Form</li>
          <li onClick={NavigateEventPage} className="nav-Items">OnChange </li>
          <li onClick={NavigateToClockPage} className="nav-Items">
            Clock
          </li>
          <li onClick={NavigateToGamePage}  className="nav-Items">Game if else function</li>
          <li onClick={NavigateToTimeOfDayPage} className="nav-Items">Time According changes if else func</li>
          <li onClick={NavigateToGoogleKeepPage} className="nav-Items">Google Keep Page</li>
          <li onClick={NavigateToAccordionPage} className="nav-Items">Accordion Page</li>
          <li onClick={NavigateToUseLiveProject} className="nav-Items">Live Project</li>
          <li onClick={NavigateToUseMapProject} className="nav-Items">Map Project</li>
          <li onClick={NavigateFilterPage} className="nav-Items">College Filter Page</li>
         <li onClick={NavigateComponentNamePage} className="nav-Items">Component Name</li>
         
         <li onClick={NavigateToUseEffectPage} className="nav-Items">UseEffect Page</li>
          <li onClick={NavigatePokemonPage} className="nav-Items">Pokemon Page</li>
        </ul>
  
    
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
      </div>
      <h1>Hello, This is my About</h1>
    </>
  );
};

export default Main;
