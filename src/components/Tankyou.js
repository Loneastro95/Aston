import React from "react";
import rectangle from "../image/Rectangle 58.png"
import { useNavigate } from "react-router-dom";

function Tankyou() {
    const navigate = useNavigate();

  return (
    <div className="container">
      <div className="top"  style={{marginTop: "50px"}}>
        <h1 className="text">Aston</h1>
        <div
          className="button"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <button className="btn2" style={{ marginTop: "30px" }}>
            Log Out
          </button>
        </div>
      </div>
     
      <div className="middle" style={{width: '720px', height: "588px", marginLeft: '220px', textAlign: "center", marginTop: '100px', justifyContent: 'space-around'}}>
        <img src={rectangle} alt="" />
      <h1 className="maintext" style={{marginLeft: '75px', marginTop: "40px"}} >
            Thanks For Your Support!!! 
          </h1>

        <h2 style={{color: "#9D9D9D", marginTop: "30px", marginBottom: "30px"}}>YOUR BOOKING WAS SUCCESSFUL </h2>

        <button className="btn2" onClick={() => navigate("/Home")} >
            Go Home
          </button>  
      </div>
    </div>
  );
}

export default Tankyou;
