import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Link, useNavigate } from "react-router-dom";
import { TailSpin as Loader } from 'react-loader-spinner';

function Login() {
  const navigate =  useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    setLoading(true); // Set loading to true when submitting the form

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.email === 'admin@example.com') {
          navigate('/Admin');
        } else {
          navigate('/Home');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Set loading back to false when the operation is completed (success or error)
      });
  };

       
    

  return (
    <div className="container" style={{ paddingLeft: "400px", paddingRight: "400px" }}>
      <div className="main">
        <div className="left2" style={{ marginTop: "50px" }}></div>
        <div className="right2" style={{ marginTop: "50px" }}>
          <div className="imgsign"></div>
          <h1 style={{ marginLeft: "180px" }}>Log In</h1>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>


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
              <p style={{textAlign: 'end', marginRight: 40}}>Forgot Password? <Link to="/Forgot">Rest Now!</Link> </p>
            </div>
            <button className="button1" type="submit" disabled={loading}>
            {loading ? (
            <Loader type="Oval" color="#black" height={20} width={20} />
          ) : (
            'Log In'
          )}
            </button>

            <div className="checkbox">
              <p style={{textAlign: 'end', marginRight: 40}}>Don't have an account: <Link to="/Signup">SignUp</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login