import React from "react";
import {Route,Switch } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Error from "./Error";
const App=()=> {
  const Name=()=>{
    return  <h1>Hello, My name Poonam</h1>
  }
  return (
    <>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path="/contact/name" component={Name}/>

      <Route component={Error}/>
    </Switch>
    {/* <About/>
    <Contact/> */}
    </>
  );
}

export default App;
