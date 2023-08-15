import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [inputFrom, setInputFrom] = useState({
    Name: "",
    Email: "",
    Password: "",
    Number: "",
  });
  const [newInputFrom, setNewInputFrom] = useState({});
  const [showHide,setShowHide]=useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOnChange = (e) => {
    console.log("c");
    const { name, value } = e.target;
    setInputFrom((PreviousData) => {
      return { ...PreviousData, [name]: value };
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(false);
    setShowHide(true)
    setNewInputFrom({...inputFrom})
  };

  console.log("setShowHide", showHide,inputFrom, inputFrom,"setNewInputFrom", newInputFrom)
  return (
    <div>
        {showHide? (
        <Typography> {newInputFrom.Name} To subscribe to this website,{newInputFrom.Number}
            please enter your email address here {newInputFrom.Email}.
            We will send updates occasionally.</Typography>):null}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleOnChange}
            margin="dense"
            id="name"
            name="Name"
            value={inputFrom.Name}
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            onChange={handleOnChange}
            margin="dense"
            id="email"
            name="Email"
            value={inputFrom.Email}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            onChange={handleOnChange}
            margin="dense"
            id="password"
            name="Password"
            value={inputFrom.Password}
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            onChange={handleOnChange}
            margin="dense"
            id="number"
            name="Number"
            value={inputFrom.Number}
            label="Mobile Number "
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOpen}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
