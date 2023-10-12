import logo from './logo.svg';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
// import ImageAndRegisterForm from './components/ImageAndRegisterForm';

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import RegisterPage from "./components/RegisterPage";
// import ThankYouPage from "./components/ThankYouPage";
// import Home from './components/Home';
// import About from './components/About';
import Login from './components/login'
import SignUp from './components/signup'
import Forgot from './components/forgot'
import Reset from './components/reset'
import CarouselComponent from './components/carousels';



function App() {
  return (
    // <div className="App">
    //   <ImageAndRegisterForm />
      
    // </div>
    
    
    <div className="App">
      <div className='container'>
      <div className='caro-container'><CarouselComponent /></div>
      <div className='form-container'>
        <div className='form-header'>
          <div className="logo-container">
            <img src='maya.png' className='logoClass'/>
          </div>
        </div>
        <div className='form-content'>
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </Router>
        </div>
        <div className='form-footer'>
          <div className="copy-container">
            <img src='copy.png' className="copyClass"/>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    
  );
}

export default App;
