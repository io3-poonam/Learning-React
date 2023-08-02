import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Main from "./main";
import Count from "./component/Count/Count";
import Clock from "./component/Clock/Clock";
import Shopping from"./component/Todo List/Shopping";
import Forms from"./component/form/form"
import Events from"./component/EventChange/Event"

import Error from "./Error";
const App=()=> {
  
  return (
    <>
<BrowserRouter>
<Routes>
      <Route  path='/'  element={<Main />}></Route>
      <Route  path="/count" element={<Count />}></Route>
      <Route  path="/todo" element={<Shopping />}></Route>
      <Route  path="/form" element={<Forms />}></Route>
      <Route path="/Clock" element={<Clock/>}></Route>
      <Route path="/event" element={<Events/>}></Route>
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
