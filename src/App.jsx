// there i stwo type of component (1)function based (2)class based it is fuction based component
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// react router is used to neviigate the pges withouut uploading the pages agaon and again 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Welcome to Light Mode', 'success')
      document.title = 'TextUtils- Dark Mode'

    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#4545af';
      document.body.style.color = 'white';
      showAlert('Welcome to Dark Mode', 'success')
      document.title = 'TextUtils- Light Mode'


    }
  }
  return (
    // now it is jsx inside the div JSX== Html inside the (); callsed jsx inside which we can use javascript in {curly braces} react uses camel cases classNameName and for is reserved keywords in javascript so we dont use them as so we uses  classNameNameName and tabIndex
    // (1) we cant return different different tags inside the jsx we can only return one tag inside that tag we can use tag but outside we cant use amy tagas in this there is only tag div classNameNameName 
    // (2) to use two tags inside jsx we use JSX FRAGMENTS <>  </>

    <>
    <Router>
        <Navbar title="TextUtils" AboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* using navbar component by importing above and passi ng props as type  */}
        <div className="container">
       

        <Routes>
          			<Route exact path="/about" element={    <About heading="About Us" mode={mode} />} /> 
                {/* exact is usede for exact matching means suppose we ther are     /user ----> component1
                        /user/about -----> component2 then on clicking /user/about it may render to component1 bcz of partial matching  */}
          			<Route exact path="/" element={ <TextForm showalert={showAlert} heading=   "Write Your Thaught"  Title="TextUtils- Word Counter ,Character Counter, Remove extra spaces" mode={mode} /> } />
        		</Routes>




          {/* <TextForm showalert={showAlert} heading=   "Write Your Thaught"  Title="TextUtils- Word Counter ,Character Counter, Remove extra spaces" mode={mode} /> 
           <About heading="About Us" mode={mode} /> */}

        </div>
          </Router>
    </>
  );
}

export default App;
