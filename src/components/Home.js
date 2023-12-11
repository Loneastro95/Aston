import React, {useRef} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Rooms from "./Rooms";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  const roomsRef = useRef(null);

  const scrollToRooms = () => {
    roomsRef.current.scrollIntoView({ behavior: "smooth" });
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
           <button className="btn">Home</button>
          <Link to="/Profile"> <button className="btn"  style={{marginLeft:'13px'}}>Profile</button></Link> 
           <button className="btn" onClick={scrollToRooms}  style={{marginRight:'50px'}}>Rooms</button>
          <Link to="/"><button className="btn2" onClick={Signout} style={{marginTop:'30px'}}>Log Out</button></Link>
        </div>
      </div>
      <div className="main">
        <div className="left">
          <h2 className="text2">Book Your Prefect Room</h2>
          <h1 className="maintext">
            Your Ultimate
            <br />
            Hotel Booking
            <br />
            Destination.
          </h1>
          <h2 className="text2">
            Welcome to our hotel booking website. We Are your 
            <br/> go-to platform for finding the prefect 
            <br/> accommodation for your travels. whether you’re
            <br/> planning a business trip
            </h2>
            <div className="spend">
            <div className="img" style={{marginLeft: '13px'}} />
            <div className="img1" style={{marginLeft:'13px'}}/>
            <div className="box">
                <h1 className="text3" style={{marginLeft:'13px', marginTop: '55px'}}>
                    Spend your vacation in 
                    <br/> comfort & luxury at one of 
                    <br/> our many estabilshment.
                </h1>
                <button className="btn3" onClick={scrollToRooms}>Book Now!</button>
            </div>
            </div>
        </div>
        <div className="right">
        
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginBottom: '40px'}}>
            <div>
              <h1 style={{display: 'flex', alignSelf: 'start'}}>Exceptional Service</h1>
              <p  className="textpar" style={{ width: '600px', height: '180px', display: 'flex', alignSelf: 'start', marginLeft: '40px'}}>What truly sets us apart is our dedicated team of professionals who are committed to exceeding your expectations. From the moment you step through our doors until your departure, our staff is here to ensure that your stay is seamless and unforgettable.<br/><br/>
               At Aston, we believe in providing more than just a place to stay. We aim to be the epitome of elegance, offering an immersive experience that reflects the essence of the city we call home. Our vision is to create an oasis of tranquility in the midst of the city's pulse, ensuring that every guest leaves with cherished memories.
              </p>

            </div>
            <div className='pic2' />
          </div>
          <div style={{marginTop: '130px'}} ref={roomsRef}><Rooms  /></div>
    </div>
  );
}

export default Home;
