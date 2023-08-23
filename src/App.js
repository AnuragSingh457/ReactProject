import './App.css';
import  React,{ useState } from 'react';
import Navbar from  './components/navbar';
import Textarea from './components/textarea';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 function App() {
  const [mode,setmode] = useState('light');

  const tooglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#102a43';
      document.body.style.color="white";
    }
    else{
      setmode('light');
     document.body.style.backgroundColor='white';
     document.body.style.color="black";
    }
  }
  return(

 <><Router>
 <Navbar title="TextChanger" home="Home"  about="About Us" mode={mode} tooglemode={tooglemode} />
 <div className='container'>
  
 <Routes>
          <Route path="/about" element={<About />}>
          
          </Route>
          
        
          <Route path="/" element={<Textarea button1="UPPERCASE" mode={mode} button2="LOWERCASE" button3="CLEAR" button4="ENCODE" button5="DECODE" button6="COPY" button7="Remove Extra Spaces"/>}>
          </Route>
</Routes>
    </div>
    </Router>
    
    </>



  );
  
 }



export default App;
