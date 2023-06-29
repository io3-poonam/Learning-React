import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import SubPart from './component/SubPart';
import Count from './component/count';
import Footer from './component/Footer';
import Challenge from './component/Challenge';



function App() {
  return (
    <div>
     <Count/>
     <Challenge/>
     <Home />
     <SubPart />
     <Footer/>
    </div>
  );
}

export default App;
