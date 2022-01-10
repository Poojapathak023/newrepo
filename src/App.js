import './App.css';
import Navbar from './Components/Navbar.js';
import Form from './Components/Form';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
 const toggleMode = () =>{
   if(mode === 'light'){
    setMode('dark');
    document.querySelector('body').style.backgroundColor = '#1c1c86';
    showalert('Sucess','Dark mode Enabled');
    document.title="My App - Dark Mode";
   }
   else{
     setMode('light');
     document.querySelector('body').style.backgroundColor = 'white';
     showalert('Sucess','Light mode Enabled');
     document.title="My App - Light Mode";
   }

  }
  const [alert, setalert] = useState(null);
  const showalert = (type,msg) =>{
    setalert({
     type: type,
     msg:msg 
    })
   
    setTimeout(() => {
    setalert(null); 
  }, 2000); 
  }

   return (
    <Router>
    <>
    
  <Navbar title="MyApp" menu1="Home" menu2="About"  mode={mode} toggleMode={ toggleMode }/>
  <Alert alert={alert} />
  
  <Routes>
          <Route extact path="/about" element={<About />}>
            
          </Route>
          <Route extact path="/" element={<Form showalert={showalert} heading="Enter Your text to Analyze"  heading2="Enter Your Number" mode={mode} />
         }>
          </Route>
          
         </Routes>
        
    </>
    </Router>
  );
}

export default App;
