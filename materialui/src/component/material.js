import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./style.css";
export default function ResponsiveDialog() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const [emptyInput, setEmptyInput] = useState({
    Name: "",
    Password: "",
    Number: "",
    ApplicationNumber: "",
    Email:""
  });
  const [newInput, setNewInput] = useState({});
  const [showHide, setShowHide] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  // console.log("storeInput",storeInput)
  const handleClickOpen = () => {
    setOpen(true);
    console.log("c");
  };
  console.log("c", open);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    setNewInput({...emptyInput});
    console.log("m");
    setShowHide(true);
  };
  console.log("NewInput",newInput)
  const handleOnChange = (event) => {
    setInput(input);
    const { name, value } = event.target;
        setEmptyInput((oldData)=>{
          return{...oldData,[name]:value}
    })
  };
  // const HandleBtnClick1=(pd)=>{
  //   pd.preventDefault();
  //   setAddNote1((pre)=>{
  //       return[...pre,input]
  //   })
    console.log('note1',input)

  console.log("input", emptyInput);

  return (
    <div className="main-note">
          
      {showHide ? (
        <div className="form">
          
          <h1 className="main-heading"> Candidate     {newInput.Name} Registration Successful </h1>
          <div className="heading-div">
            <h2 className="heading-two" >
              our Registration details are Saved, Your Login Details has been
              emailed To your Registered Email ID:
              {newInput.Email}
             SMS to Registered Mobile No:
              {newInput.Number}
            </h2>
            <h2 className="heading-two">Kindly Check Spam/Junk folder also.</h2>
            <h2 className="heading-two">
              Please Login to Complete your Online Application Form. Kindly Note
              your Application Number:
              {newInput.ApplicationNumber}
            </h2>
            <Button variant="outlined" 
            // onClick={(pd)=>HandleBtnClick1(pd)}
            > Proceed</Button>
          </div>
        </div>
      ) : null}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  onChange={handleOnChange}
                  required
                  id="standard-required"
                  label="Name"
                  name="Name" value={emptyInput.Name}
                  // defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  onChange={handleOnChange}
                  id="standard-search"
                  label="Email Id"
                  type="email"
                  name="Email"
                   value={emptyInput.Email}
                  variant="standard"
                />
                <TextField
                  onChange={handleOnChange}
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="Password" value={emptyInput.Password}
                  autoComplete="current-password"
                  variant="standard"
                />

                <TextField
                  onChange={handleOnChange}
                  id="standard-number"
                  label="Number"
                  type="number"
                  name="Number" value={emptyInput.Number}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />

                <TextField
                  onChange={handleOnChange}
                  id="standard-helperText"
                  label="Massage"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="standard"
                />
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
