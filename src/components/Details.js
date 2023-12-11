import React, { useState, useEffect } from "react";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";


function Details() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (formData) => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const docRef = await addDoc(collection(db, "Cart" + authUser.uid), {
          owner_uid: authUser.uid,
          Profile: formData.profile,
          Price: parseInt(data.price) * count,
          Amount: count,
          Date: formData.date,
          Number: formData.number,
          Address: formData.address,
          Room: data.name,
          Image: data.image
        });
        alert("Thank You for Booking with us");
        console.log("Document written with ID: ", docRef.id);
        const docRef1 = await addDoc(collection(db, "Cart"), {
          owner_uid: authUser.uid,
          Profile: formData.profile,
          Price: parseInt(data.price) * count,
          Amount: count,
          Date: formData.date,
          Number: formData.number,
          Address: formData.address,
          Room: data.name,
        });
        alert("Your Room has been booked");
        navigate("/Tankyou")
      } else {
        console.error("User not authenticated");
      }
    } catch (e) {
      alert("error");
      console.error("Error adding document: ", e);
    }
  };

  const Signout = () => {
    signOut(auth)
      .then(() => {
        alert('Log out successful');
       
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{marginBottom:'20px'}}>
         <Link to="/Home"><button className="btn" >Home</button></Link>
          <Link to="/Profile"> <button className="btn"  style={{marginLeft:'13px'}}>Profile</button></Link> 

          <Link to="/"><button className="btn2" onClick={Signout} style={{marginTop:'30px'}}>Log Out</button></Link>
        </div>
      </div>
      <div className="main">
        <div className="left1">
          <img className="left1" src={data.image} alt="React Image" />
          <h1 className="maintext2">{data.name}</h1>
          <h2 className="maintext3">Description</h2>
          <p className="paragraph">{data.description}</p>
        </div>
        <div className="right1">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <h1 className="text3" style={{ marginTop: "36px" }}>
              TOTAL
              <br />
              PRICE
            </h1>
            <h1 className="maintext1" style={{ marginLeft: "80px" }}>
              R{parseInt(data.price) * count}/ night
            </h1>
          </div>
          _____________________________________________________________
          <form>
            <label htmlFor="profile">Name</label>
            <input
              {...register("profile", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+$/i,
                  message:
                    "Invalid username (only letters, numbers, and special characters ._%+- are allowed)",
                },
              })}
              placeholder="Username"
            />
            {errors.name && (
              <span style={{ color: "red" }} className="error">
                {errors.name.message}
              </span>
            )}

            <label htmlFor="number">Number</label>
            <input
              {...register("number", {
                required: "Number is required",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Invalid number (only numbers are allowed)",
                },
                minLength: {
                  value: 10,
                  message: "Password must have at least 10 characters",
                },
              })}
              placeholder="Number"
            />
            {errors.number && (
              <span style={{ color: "red" }} className="error">
                {errors.number.message}
              </span>
            )}

            <label htmlFor="address">Address</label>
            <input
              {...register("address", {
                required: "Address is required",
              })}
              placeholder="Address..."
            />
            {errors.address && (
              <span style={{ color: "red" }} className="error">
                {errors.address.message}
              </span>
            )}

            <label htmlFor="date">Date</label>
            <input
              {...register("date", {
                required: "Date is required",
              })}
              type="date"
              min={new Date().toISOString().split("T")[0]} // Set min attribute to current date
            />

            {errors.date && (
              <span style={{ color: "red" }} className="error">
                {errors.date.message}
              </span>
            )}
          </form>
          <div className="count">
            <button
              className="plus"
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              -
            </button>
            <h1 className="number">{count}</h1>
            <button className="plus" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
          <button className="button1" onClick={handleSubmit(handleFormSubmit)}>
            Book Now!
          </button>
        </div>
      </div>
      <div className="about"></div>
    </div>
  );
}

export default Details;
