import React, { useState, useEffect } from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'
import { Link } from "react-router-dom";

function Signup() {

    const [email, setEmail] = useState('');
    const [ password, setPassword] =useState('');

    
    const register = (() =>{


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
    
          alert("Successfully Created")
          
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    
       })
    

  return (
    <div className="container" style={{paddingLeft: '400px', paddingRight: '400px'}}>
        <div className="main">
        <div className="left2"  style={{marginTop: '50px'}}>
        </div>
        <div className="right2" style={{marginTop: '50px'}}>
            <div className="imgsign"></div>
            <h1>Sign Up</h1><br/><br/>
          <form>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
            
                marginBottom: "10px"
              }}
            >
              Username
            </label>
            <input
              placeholder="Username..."
             
            />
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
             
                marginBottom: "10px"
              }}
            >
              Email
            </label>
            <input
              placeholder="test@gmai.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
             
            />
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
                
                marginBottom: "10px"
              }}
            >
              Password
            </label>
            <input
              
              placeholder="Name..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </form>
          <div className="checkbox">
          <p>I agree to Terms & Condition</p>
          </div>
          <Link to="/"><button onClick={register} className="button1">Create account</button></Link> 
        </div>
          </div>
    </div>
  )
}

export default Signup