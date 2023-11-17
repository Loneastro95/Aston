import { Routes, Route } from "react-router-dom"
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

function App() {
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
       </Routes>
     

    </div>
  );
}

export default App;
