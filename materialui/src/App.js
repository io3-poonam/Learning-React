
import './App.css';
// import ResponsiveDialog from "material";
import ResponsiveDialog from './component/material';
import AlertDialog from './component/test';
import FormDialog from './component/test1';
import Testing from './component/testingTodo';
import CustomizedDialogs from './component/dialog';
function App() {
  return (
<>
<CustomizedDialogs/>
<Testing/>
<ResponsiveDialog/>
<AlertDialog/>
<FormDialog/>
</>
  );
}

export default App;
