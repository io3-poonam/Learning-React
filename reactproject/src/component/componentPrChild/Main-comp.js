import React , { createContext } from "react";
import CompA from "./CompA"
const FirstName=createContext();
const LastName=createContext();
const MainComp=()=>{
    return(<>
<FirstName.Provider value="Poonam">
    <LastName.Provider value="Maurya">

    <CompA/>
    </LastName.Provider>
    </FirstName.Provider>
    </>)
}
export default MainComp;
export{FirstName,LastName};
