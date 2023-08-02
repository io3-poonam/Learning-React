import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
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
  return (
    <>
      <div className="">
        <ul className="Items">
          <li onClick={NavigateToCountPage} className="nav-Items">
            Count
          </li>
          <li onClick={NavigateToTodoPage} className="nav-Items">
            ToDo List
          </li>
          <li onClick={NavigateFormPage} className="nav-Items">Input Form</li>
          <li onClick={NavigateEventPage} className="nav-Items">OnChange </li>
          <li onClick={NavigateToClockPage} className="nav-Items">
            Clock
          </li>
          <li onClick={NavigateToGamePage}  className="nav-Items">Game if else function</li>
          <li onClick={NavigateToTimeOfDayPage} className="nav-Items">Time According changes if else func</li>
        </ul>
        <button>Navigate to contact page</button>
        <button>Navigate to contact page</button>
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
        {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
      </div>
      <h1>Hello, This is my About</h1>
    </>
  );
};

export default Main;
