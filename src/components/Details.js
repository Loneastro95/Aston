import React, { useState, useEffect } from "react";
import { addDoc,getDocs ,collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const data = location.state;
  console.log(data)

  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const CheckOut = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const docRef = await getDocs(collection(db, "Cart" + authUser.uid), {
          owner_uid: authUser.uid,
          Profile: profile,
          Price: date,
          Amount: count,

          Number: number,
          Address: address,
        });

        console.log("Document written with ID: ", docRef.id);
      } else {
        console.error("User not authenticated");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container">
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{ marginBottom: "20px" }}>
          <button className="btn">Home</button>
          <button className="btn" style={{ marginLeft: "13px" }}>
            About Us
          </button>
          <button className="btn" style={{ marginRight: "50px" }}>
            Rooms
          </button>

        </div>
      </div>
      <div className="main">
        <div className="left1">
        <img  className="left1" src={data.image} alt="React Image" />
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
            <h1 className="text3" style={{marginTop: '36px'}}>
              TOTAL
              <br />
              PRICE
            </h1>
            <h1 className="maintext1" style={{ marginLeft: "80px" }}>
            R{ parseInt(data.price) *count}
            </h1>
          </div>
          _____________________________________________________________
          <form>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              NAME
            </label>
            <input
              placeholder="Name..."
              className="input"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              PHONE NO.
            </label>
            <input
              placeholder="Number..."
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              ADDRESS
            </label>
            <input
              placeholder="Address..."
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              DATE
            </label>
            <input
              placeholder="Name..."
              className="input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
          <button className="button1" onClick={CheckOut}>Book Now!</button>
        </div>
      </div>
      <div className="about">
        
      </div>
    </div>
  );
}

export default Details;
