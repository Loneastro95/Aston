import { Routes, Route } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "./config/firebase";
import './App.css';
import Details from './components/Details';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Forgot from "./components/Forgot";
import Admin from "./components/Admin";
import Form from "./components/form";
import Profile from "./components/Profile";
import Pic from "./components/pic";
import Tankyou from "./components/Tankyou";
import { useNavigate } from "react-router-dom";

function App() {
  
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  // const [authenticated, setAuthenticated] = useState(false)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       console.log("User is logged in");
  //       setAuthenticated(true);
  //       navigate('/Home')
        
  //     } else {
  //       console.log("User is not logged in");
  //       setAuthenticated(false);
  //       navigate('/')
  //     }
  //   });
  
    
  // }, []);


  return (
    <div className="App">
       <Routes>
       <Route path="Home" element={ <Home/> } />
       <Route path="Details" element={ <Details/> } />
       <Route path="Rooms" element={ <Rooms/> } />
       <Route path="Signup" element={ <Signup/> } />
       <Route path="About" element={ <About/>} />
       <Route path="/" element={ <Login/>} /> 
       <Route path="Forgot" element={ <Forgot/> } />  
       <Route path="Admin" element={ <Admin/> } /> 
       <Route path="Profile" element={ <Profile/>} />
       <Route path="Pic" element={ <Pic/>} /> 
       <Route path="Tankyou" element={ <Tankyou/> }/>
       </Routes>
     

    </div>
  );
}

export default App;
