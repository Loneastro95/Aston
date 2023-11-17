import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate} from "react-router-dom";
import "./Home.css";

function Signup() {

  const navigate =  useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password , name } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Successfully Created");
        const user = userCredential.user;
        navigate('/Profile')
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="container" style={{ paddingLeft: "400px", paddingRight: "400px" }}>
      <div className="main">
        <div className="left2" style={{ marginTop: "50px" }}></div>
        <div className="right2" style={{ marginTop: "50px" }}>
          <div className="imgsign"></div>
          <h1 style={{ marginLeft: "180px" }}>Sign Up</h1>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="name">Username</label>
            <input
              {...register("name", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+$/i,
                  message: "Invalid username (only letters, numbers, and special characters ._%+- are allowed)",
                },
              })}
              placeholder="Username"
            />
            {errors.name && <span  style={{color: 'red'}} className="error">{errors.name.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="test@gmail.com"
            />
            {errors.email && <span  style={{color: 'red'}}  className="error">{errors.email.message}</span>}

            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                  
                },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <span style={{color: 'red'}} className="error">{errors.password.message}</span>}

            <div className="checkbox">
              <p>I agree to Terms & Conditions</p>
            </div>
            <button className="button1">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
