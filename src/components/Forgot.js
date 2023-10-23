import React, { useState, useEffect } from "react";
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../config/firebase'
import { Link } from "react-router-dom";

function Forgot() {

    const [email, setEmail] = useState('');
    const [ password, setPassword] =useState('');

    
    const register = (() =>{


        sendPasswordResetEmail(auth, email, password)
        .then((userCredential) => {
          // Signed up 
    
          alert("Successfully Logged in")
          
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

          </form>
          <div className="checkbox">

          </div>
          
          <Link to="/"><button style={{marginTop: '40px'}} onClick={register} className="button1">Log In</button></Link>

        </div>
          </div>
    </div>
  )
}

export default Forgot;