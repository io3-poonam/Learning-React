import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 const  AlertDialog=()=>{
  const [open,setOpen]=useState(false);
  // const [inputData,setInputData]=useState();
  const [emptyInputData,setEmptyInputData]=useState({
    name:"",
    applicationNumber:"",
    number:"",
    email:"",
    password:""
  })
  const [newInputData,setNewInputData]=useState({
  })
  const [show,setShow]=useState(false)
  console.log("open",open,"emptyInputData",emptyInputData, "newInputData", newInputData)
const handleClick=()=>{
  setOpen(true);
}
const handleChangeInput=(event)=>{
  // setInputData(inputData)
const{name,value}=event.target;
setEmptyInputData((oldValue)=>{
return{...oldValue,[name]:value}
})
}
const handleCancel=()=>{
  setOpen(false)
}
const handleSubmit=()=>{
  setShow(true)
  setOpen(false);
  setNewInputData({...emptyInputData})
}
// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );
  return (<>
    {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h1 className="main-heading"> Candidate {inputValue} Registration Successful </h1>
        </Typography>
        <Typography variant="h5" component="div">
        <h2 className="heading-two">Kindly Check Spam/Junk folder also.</h2>
       
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <h2 className="heading-two" >
              our Registration details are Saved, Your Login Details has been
              emailed To your Registered Email ID:
              {inputValue}
             SMS to Registered Mobile No:
              {inputValue}
            </h2>
        </Typography>
        <Typography variant="body2">
        <h2 className="heading-two">
              Please Login to Complete your Online Application Form. Kindly Note
              your Application Number:
              {inputValue}
            </h2>
 
      
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined"  
            // onClick={(pd)=>HandleBtnClick1(pd)}
            > Proceed</Button>
      </CardActions>
    </Card> */}

    <div>
      {show ? (
    <Box className="form">
           <Typography variant="h1" sx={{ fontSize: "2rem" }} color="text.secondary"  align='center' >Candidate    {newInputData.name} Registration Successful </Typography>
          <Box className="heading-div">
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="text.secondary"  align='center' >             our Registration details are Saved, Your Login Details has been
              emailed To your Registered Email ID:
              <span style={{color:"red"}} >  {newInputData.email}</span>
             SMS to Registered Mobile No:
              {newInputData.number}
              </Typography>
          <Typography variant="h1" sx={{ fontSize: "1rem" }} color="text.secondary"  align='center' >             our Registration details are Saved, Your Login Details has been
            Kindly Check Spam/Junk folder also.</Typography>
            <Typography variant="h1" sx={{ fontSize: "1rem" }} color="text.secondary">
              Please Login to Complete your Online Application Form. Kindly Note
              your Application Number:
              {newInputData.applicationNumber}
            </Typography>
            <Button variant="outlined" 
            // onClick={(pd)=>HandleBtnClick1(pd)}
            > Proceed</Button>
          </Box>
        </Box>):null}

      <Button variant="outlined" 
      onClick={handleClick}
      >
        Open the Input Form
      </Button>
      <Dialog
      open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Fill Up the Basic Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField onChange={handleChangeInput} 
          required
          id="outlined-required"
          label="Name"
          type='text'
          name="name"
          value={emptyInputData.name}
        />
        <TextField onChange={handleChangeInput}
          id="outlined-number"
          label="Email Id"
          type="email"
          name="email"
          value={emptyInputData.email}
        />
        <TextField onChange={handleChangeInput} 
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={emptyInputData.password}
          autoComplete="current-password"
        />
    
        <TextField onChange={handleChangeInput} 
          id="outlined-number"
          label="Number"
          type="number"
          name="number"
          value={emptyInputData.number}
        />
        <TextField onChange={handleChangeInput} 
         id="outlined-search" label="Qualification" type="search" />
        <TextField onChange={handleChangeInput} 
          id="outlined-helperText"
          label="Helper text"
          helperText="Some important text"
        />
    
 
    </Box>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}
          >Cancel</Button>
          <Button  onClick={handleSubmit}
          autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div> 
     </>
  );
}
export default AlertDialog;