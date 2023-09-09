import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);
const [input, setInput]=useState({
  Name:"",
  Number:"",
  ApplicationNumber:"",
  Email:""
})
const [newInput, setNewInput]=useState({

})
const [expandOpen, setExpandOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    setOpen(false);
    setExpandOpen(true)
  };
  const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setInput((oldData)=>{
      return{ ...oldData,[name]:value}
    })
    setNewInput(input)

  }
console.log("{open}",open, "input",input, "newInput",newInput)
  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen} >
        Open dialog 
      </Button>
        <BootstrapDialog open={open}
   
   aria-labelledby="customized-dialog-title" 
  
 >
   <BootstrapDialogTitle id="customized-dialog-title"  >
     Modal title
   </BootstrapDialogTitle>
   <DialogContent dividers>
   <Box   
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField name='Name'  value={input.Name} id="standard-basic" onChange={handleOnChange} label="Enter Your Name" variant="standard" /><br></br>
      <TextField name='Email' value={input.Email}  id="standard-basic" onChange={handleOnChange} label="Enter Your Email Id" variant="standard" /> <br></br>  
      <TextField  type="number" name='Number' value={input.Number}  id="standard-basic" onChange={handleOnChange} label="Enter Your Mobile Number" variant="standard" /><br></br>
      <TextField type="number"  name='ApplicationNumber' value={input.ApplicationNumber}  id="standard-basic" onChange={handleOnChange} label="Enter Your Application Number" variant="standard" /><br></br>

    </Box> 
   </DialogContent>
   <DialogActions>
     <Button autoFocus onClick={handleSubmit}>
       Save changes
     </Button>
   </DialogActions>
 </BootstrapDialog>
    <div>
        
    {expandOpen? (  <Box >
    <Typography gutterBottom>
       either {newInput.Name} or {newInput.Name} will go there.
       we are finish not only work but also finish the house work
     </Typography>
     <Typography gutterBottom >
       {newInput.Email}we are not only go to the market{newInput.ApplicationNumber} but also watching the movie in theater
     </Typography>
     <Typography gutterBottom>
      {newInput.Number} i will help him because you did help me
     </Typography>
      
      </Box>
     ):null}
 
    </div>
 
    </>
  );
}
