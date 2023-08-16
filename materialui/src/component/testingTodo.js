import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "./list";
import React, { useState } from "react";
const Testing = () => {
  const [input,setInput]=useState("");
  const [NewInput, setNewInput]=useState([]);
  const [expand,setExpand]=useState(false);
  const HandleChange=(event)=>{
    setInput( event.target.value);
  }
  const HandleClick=()=>{
    if(input){
    setNewInput((oldItems)=>{
      return[...oldItems,input]
    })}
    setInput("")
  }
  const HandleCancel=(id)=>{
    setNewInput((deleteItems)=>{
return(deleteItems.filter((array,ind)=>{
  return(ind !==id)
}))
    })
  }
  const HandleExpand=()=>{
    setExpand(true)
  }
  console.log("input",input, "NewInput",NewInput);
  return (
    <>
    <Button onClick={HandleExpand}  variant="outlined" >Click Here Button</Button>
   {expand? ( 
   <Box  width="30%" margin="2% auto" sx={{backgroundColor:"aliceblue"}} border="1px solid gray" >
      <Box >
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem" }}
          color="text.secondary"
          align="center"
        
        >
          ToDo List
        </Typography>
        
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"  width="80%" justifyContent="space-around" 
      >
   <TextField id="standard-basic" label="Add to Items" variant="standard" value={input}  onChange={HandleChange}/>
   <Button variant="outlined" 
   onClick={HandleClick}
      >
      ➕
      </Button>
      </Box>
     <ul>
      {
        NewInput.map((shoppingItems,index)=>{
          return(<><List
          test={shoppingItems}
          key={index}
          id={index}
          onCancel={HandleCancel}/>
          </>)
        })
      }
     </ul>
      </Box>
      ):null}
    </>
  );
};
export default Testing;
