import React, { useState } from "react";
import "./Count.css";
import { useSearchParams } from "react-router-dom";
// import { useLocation,useHistory} from "react-router-dom";
const count=0;
const Button=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('age'))
    const age=searchParams.get('age');
    const city=searchParams.get('city');
const handleClick=()=>{
    setSearchParams({age:40})
}
// const onChange=(event)=>{
   
//     setSearchParams(text:event.target.value)
// }
    // const Location=useLocation();
    // const history = useHistory();
    // console.log("Location",Location, "history", history)
    const[count,setCount]=useState(0)
    const incBtn=()=>{
        console.log('click')
        setCount(count+1)
    }
    const decBtn=()=>{
        if(count<=0){
        setCount(0)}
        else{
            setCount(count-1)
        }
    }
    const cleBtn=()=>{
        setCount(0)
    }
return(<>
<div>
<h1> my age is {age}</h1>
<h1>my city is {city}</h1>
<input type="text" placeholder="set age query"  onChange={(event)=>setSearchParams({color:event.target.value,age:50})}/>
<button className="btnBtn" onClick={handleClick}>submit</button></div>
    {/* <h1>count Location is <span style={{color:"red"}}>{Location.pathname}</span></h1>
    <h1>count Location key is <span style={{color:"red"}}> {Location.key}</span></h1>
    <h1>count Location {Location.hash} hash is blank</h1>
    <h1>count Location {Location.search} search is blank</h1>
    <h1>count Location {Location.state}state is blank</h1> */}
    {/* {
        Location.pathname === "/count"?    <button onClick={()=>
           history.goBack()
        }>Click Me</button>:null
    } */}

<div className="btn-Class">
<h1 className="btnHeading">Count : {count}</h1>
<button onClick={incBtn} className="btnBtn">
     {/* <AddIcon/> */}
    Addition</button>
<button onClick={decBtn} className="btnBtn">Subtraction</button>
<button onClick={cleBtn} className="btnBtn">Clear Data</button>

</div>
</>)
}


        



export default Button;
