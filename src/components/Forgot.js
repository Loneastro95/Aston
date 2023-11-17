import React, { useState, useEffect } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Forgot() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password } = data;

    sendPasswordResetEmail(auth, email, password)
      .then((userCredential) => {
        // Signed up

        alert("Successfully Logged in");
        navigate("/Forgot");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert("error");

        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div
      className="container"
      style={{ paddingLeft: "400px", paddingRight: "400px" }}
    >
      <div className="main">
        <div className="left2" style={{ marginTop: "50px" }}></div>
        <div className="right2" style={{ marginTop: "50px" }}>
          <div className="imgsign"></div>
          <h1 style={{ marginLeft: "180px" }}>Sign Up</h1>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                // Add email validation rules if needed
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <span style={{ color: "red" }} className="error">
                {errors.email.message}
              </span>
            )}

            <button className="button1">Rest Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
