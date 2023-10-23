import React, { useState, useEffect } from "react";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [ password, setPassword] =useState('');

    
    const register = (() =>{


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
    
          alert("Check email")
          
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
            <h1>Log In</h1><br/>
          <form>

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
              
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </form>
          <div className="checkbox">
         <Link to="/Forgot"><p style={{  textAlign: 'end', marginRight: '20px'}}>Forgot Password?</p></Link>
          </div>
          
          <Link to="/Home"><button onClick={register} className="button1">Log In</button></Link>
          <p style={{  textAlign: 'end', marginRight: '20px'}}>Don't an account?<Link to="/Signup">Create an account</Link> </p>
        </div>
          </div>
    </div>
  )
}

export default Login