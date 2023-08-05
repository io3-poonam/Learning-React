import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./main";
import Clock from "./component/Clock/Clock";
import Shopping from "./component/Todo List/Shopping";
import Forms from "./component/form/form";
import Events from "./component/EventChange/Event";
import Challenge from "./component/Times of day/TimesOfday";
import Game1 from "./component/Game/game1";
import GoogleKeepMain from "./component/KeepGoogle/googleKeepMain";
import Error from "./Error";
import Accordion from "./component/Accordion/Accordion";
import Shop from "./component/deleteTodo/shop";
import CountMain from "./component/Count/CountMain";
import MainName from "./component/NameSection/mainName";
import UseEffect from "./component/UseEffect/UseEffect";
import Details from "./component/LiveProject/liveProject";
import MainCard from "./component/projectInMap/mainCard";
// import CompA from"./component/componentPrChild/CompA"
// import MainComp from "./component/componentPrChild/Main-comp";
import Filter from "./component/projectInMap/fillter";
import MainComp from "./component/componentPrChild/Main-comp";
import Pokemon from "./component/Pokemon/pokemon";
const App = () => {
  return (
    <>
    <Pokemon/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/count" element={<CountMain />}></Route>
          <Route path="/todo" element={<Shopping />}></Route>
          <Route path="/form" element={<Forms />}></Route>
          <Route path="/Clock" element={<Clock />}></Route>
          <Route path="/event" element={<Events />}></Route>
          <Route path="/timeOfDay" element={<Challenge />}></Route>
          <Route path="/game" element={<Game1 />}></Route>
          <Route path="/googleKeep" element={<GoogleKeepMain />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/shopping" element={<Shop />}></Route>
          <Route path="/name" element={<MainName />}></Route>
          <Route path="counting number" element={<UseEffect />}></Route>
          <Route path="filter" element={<Filter />}></Route>
          <Route path="/cards" element={<MainCard />}></Route>

          <Route path="ComponentName" element={<MainComp />}></Route>
          <Route path="LiveProject" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
