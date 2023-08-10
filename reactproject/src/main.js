import React from "react";
import "./main.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Header from "./component/Header";
const Main=()=>{
  return(<><Header/></>)
}
// const Main = () => {
//   const navigate = useNavigate();
//   const NavigateToCountPage = () => {
//     navigate("/count");
//     console.log("NavigateToCountPage");
//   };
//   const NavigateToClockPage = () => {
//     navigate("/Clock");
//   };
//   const NavigateToTodoPage = () => {
//     navigate("/todo");
//   };
//   const NavigateFormPage = () => {
//     navigate("/form");
//   };
//   const NavigateEventPage = () => {
//     navigate("/event");
//   };
//   const NavigateToTimeOfDayPage = () => {
//     navigate("timeOfDay");
//   };
//   const NavigateToGamePage = () => {
//     navigate("game");
//   };
//   const NavigateToGoogleKeepPage = () => {
//     navigate("googleKeep");
//   };
//   const NavigateToAccordionPage = () => {
//     navigate("accordion");
//   };
//   const NavigateToToDoDeletePage = () => {
//     navigate("shopping");
//   };
//   const NavigateToNamePage = () => {
//     navigate("name");
//   };
//   const NavigateToUseEffectPage = () => {
//     navigate("counting number");
//   };
//   const NavigateToUseLiveProject = () => {
//     navigate("LiveProject");
//   };
//   const NavigateToUseMapProject = () => {
//     navigate("Cards");
//   };
//   const NavigateFilterPage = () => {
//     navigate("filter");
//   };
//   const NavigateComponentNamePage = () => {
//     navigate("ComponentName");
//   };
//   const NavigatePokemonPage = () => {
//     navigate("pokemon");
//   };
//   return (
//     <>
//       <div className="">
//         <ul className="Items">
//           <li onClick={NavigateToCountPage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/count">
//                   Count
//             </NavLink>
//           </li>
//           <li onClick={NavigateToTodoPage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/shopping">

//               ToDo List
//             </NavLink>
//           </li>
//           <li onClick={NavigateToToDoDeletePage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/todo">
//               ToDo Delete Page
//             </NavLink>
//           </li>
//           <li onClick={NavigateToNamePage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/name">
//               Name Page
//             </NavLink>
//           </li>

//           <li onClick={NavigateFormPage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/form">
//               Input Form
//             </NavLink>
//           </li>
//           <li onClick={NavigateEventPage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/event">
//               OnChange
//             </NavLink>
//           </li>
//           <li onClick={NavigateToClockPage} className="nav-Items">
//             <NavLink className="nav-Items-links" to="/Clock">
//               Clock
//             </NavLink>
//           </li>
//           <li onClick={NavigateToGamePage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/game">
//           Game if else function
//             </NavLink> 
//           </li>
//           <li onClick={NavigateToTimeOfDayPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/timeOfDay">
//           Time According changes if else func
//             </NavLink>  
//           </li>
//           <li onClick={NavigateToGoogleKeepPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/googleKeep">
//           Google Keep Page
//             </NavLink>   
//           </li>
//           <li onClick={NavigateToAccordionPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/accordion">
//           Accordion Page
//             </NavLink>
//           </li>
//           <li onClick={NavigateToUseLiveProject} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/LiveProject">
//           Live Project
//             </NavLink> 
//           </li>
//           <li onClick={NavigateToUseMapProject} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/Cards">
//           Map Project
//             </NavLink> 
//           </li>
//           <li onClick={NavigateFilterPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/filter">
//           College Filter Page
//             </NavLink>  
//           </li>
//           <li onClick={NavigateComponentNamePage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/ComponentName">
//           Component Name
//             </NavLink>   
//           </li>

//           <li onClick={NavigateToUseEffectPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/counting number">
//           UseEffect Page
//             </NavLink>    
//           </li>
//           <li onClick={NavigatePokemonPage} className="nav-Items">
//           <NavLink className="nav-Items-links" to="/pokemon">
//           Pokemon Page
//             </NavLink>     
//           </li>
//         </ul>

//         {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
//         {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
//         {/* <button onClick={NavigateToContactPage}>Navigate to contact page</button> */}
//       </div>
//       <h1>Hello, This is my About</h1>
//     </>
//   );
// };

export default Main;
