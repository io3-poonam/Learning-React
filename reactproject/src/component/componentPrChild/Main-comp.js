import React , { createContext } from "react";
import Header from "../Header";
import CompA from "./CompA";
const FirstName=createContext();
const LastName=createContext();
const MainComp=()=>{
    return(<>
    <Header/>
<FirstName.Provider value="Poonam">
    <LastName.Provider value="Maurya">

    <CompA/>
    </LastName.Provider>
    </FirstName.Provider>
    </>)
}
export default MainComp;
export{FirstName,LastName};
