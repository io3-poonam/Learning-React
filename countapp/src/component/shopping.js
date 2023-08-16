import React,{useState} from "react";
import List from "./list";
const Shopping=()=>{
    const [input, setInput]=useState("");
    const [newInput, setNewInput]=useState([]);

    const HandleOnChange=(event)=>{
        setInput(event.target.value)
       
    }
    const handleOnClick=()=>{
        console.log("btn")
        if(input){
        setNewInput((old)=>{
            return[...old,input]
        })}
        setInput("")
    }
    const HandleDelete=(id)=>{
        console.log("m")
        setNewInput((oldItems)=>{
            return(oldItems.filter((arr,ind)=>{
                return  ind!==id
            }))
        })
        
    }
    console.log("setInput", input, newInput, HandleDelete)
    return(<>
    <div style={{width:"30%", border:"1px solid",height:"50vh", margin:"2% auto"}}>
        <h1>Shopping Items</h1>
    <input type="text" placeholder="Add a items" value={input}
    onChange={HandleOnChange} style={{outline:"none", border:"none" , width:"30%"}}/>
    <button onClick={handleOnClick} >+</button>
    <ul style={{listStyle:"none", display:"flex" , flexDirection:"column"}}>
       {
        newInput.map((items,index)=>{
return(<>           <List test={items}
            key={index}
            id={index}
            onDelete={HandleDelete} 
            />
            </>)
        })
       }
        
    </ul>
    </div>
    </>)
}
export default Shopping;