
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
     setAlert({
      msg : message,
      type : type
     })

     setTimeout (() => {
        setAlert(null);
     },1500);
  }
  const toggleMode = () => {
   if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    showAlert('Dark mode has been enabled', 'success');
   }
   else{
     setMode('light')
     document.body.style.backgroundColor = 'white';
     document.body.style.color = 'black';
     showAlert('Light mode has been enabled', 'success');
   }
  }

  return (
    <>
    {/* <Router> */}
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
  
   <div className="container my-3">
   {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter the text below to Analyze"/>
          </Route>
        </Switch> */}
      <Textform showAlert={showAlert} heading="Enter the text below to Analyze"/>
   </div>
   {/* </Router> */}
    </>

  );
}

export default App;
