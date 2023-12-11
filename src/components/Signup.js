import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Trigger form validation when email or password changes
    validateForm();
  }, [email, password, name, address, number]);

  const validateForm = () => {
    let errors = {};

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!name) {
      errors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      errors.name = "Name is invalid.";
    }

    if (!address) {
      errors.address = "Address is required.";
    } else if (!/\S+/.test(address)) {
      errors.address = "Address is invalid.";
    }
    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!number) {
      errors.number = "Number is required.";
    } else if (number.length < 10) {
      errors.number = "Number must be at least 10 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSignUp = async () => {
    validateForm(); // Trigger validation before attempting to sign in

    if (isFormValid) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);

        try {
          const docRef = await addDoc(collection(db, "test" + email), {
            Email: email,
            Address: address,
            Name: name,
            Number: number,
          });

          alert("Successfully Logged In");
          navigate("/Home");
        } catch (e) {
          console.error("Error adding document: ", e.message);
          alert("Error in adding");
        }
      } catch (error) {
        console.error("Error signing in:", error);
        alert("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="left2" style={{ marginTop: "50px" }}></div>
        <div className="right2" style={{ marginTop: "50px"}}>
          <div className="imgsign"></div>
          <h1 style={{ marginLeft: "180px" }}>Sign Up</h1>
          <br />
          

        
        <div style={{ marginTop: "50px", paddingLeft: '40px' }}>
          <input
          style={{marginBottom: "20px"}}
            type="text"
            placeholder="Username..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
          <input
          style={{marginBottom: "20px"}}
            type="text"
            placeholder="Phone No. ..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.number}</p>
          <input
          style={{marginBottom: "20px"}}
            type="text"
            placeholder="Address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.address}</p>
          <input
          style={{marginBottom: "20px"}}
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
            <input
            style={{marginBottom: "20px"}}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button
         className="button1"
         style={{marginRight: 40 }}
          onClick={() => {
            handleSignUp();
          }}
          disabled={!isFormValid}
        >
          Sign Up
        </button>
    
        
        
      </div>
      </div>
    </div>
  );
}

export default Signup;
