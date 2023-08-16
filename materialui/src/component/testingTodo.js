import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
const Testing = () => {
    const[ input ,setInput]=useState("")
    const[ newInput ,setNewInput]=useState([])

    const handleChange=(e)=>{
setInput(e.target.value);
    }
    const handleClick=()=>{
      setNewInput((old)=>{
        return[...old,input]
      })  
      setInput("");
    }
    console.log("input", input, "newInput", newInput)
  return (
    <>
    <Box  width="30%" margin="2% auto" sx={{backgroundColor:"aliceblue"}} border="1px solid gray" >
      <Box >
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem" }}
          color="text.secondary"
          align="center"
        
        >
          ToDo List {input}
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
   <TextField id="standard-basic" label="Add to Items" variant="standard"  onChange={handleChange} name="name" value={input}/>
   <Button variant="outlined" 
      onClick={handleClick}
      >
      ➕
      </Button>
      </Box>
      <ul>
        {
          newInput.map((items,index)=>{
        <li>{newInput}</li>
        return 
          })
        }
      </ul>
      </Box>
    </>
  );
};
export default Testing;
