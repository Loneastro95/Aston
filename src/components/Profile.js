import './profile.css';
import React, { useState, useEffect } from 'react';
import Pic from './pic';
import { doc, getDocs, collection, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { useNavigate } from 'react-router-dom';




const Profile = () => {

  const [profile, setProfile] = useState([]);
  const [profileInfo, setProfileInfo] = useState([])

  const initialUser = {
    name: "Kenth",
    phone: "0674321256",
    email: "Example@gmail.com",
    address: "12th st",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const authUser = getAuth().currentUser;
  
      // Update the Firestore document with the new user information
      await updateDoc(doc(db, "test" + authUser.email, profileInfo[0].id), {
        Name: user.name,
        Email: user.email,
        Number: user.phone,
        Address: user.address,
      });
  
      // Update the local state with the new user information
      setProfileInfo([
        {
          ...profileInfo[0],
          Name: user.name,
          Email: user.email,
          Number: user.phone,
          Address: user.address,
        },
      ]);
  
      setIsEditing(false);
    } catch (error) {
      alert('Error updating profile: ' + error.message);
      console.error("Error updating profile: ", error);
    }
  };

  const handleCancelClick = () => {
    setUser(initialUser);
    setIsEditing(false);
  };
 

  const authUser = getAuth().currentUser;
  const fetchUser = async () => {
    try {
      const authUser = getAuth().currentUser; // Add this line
      const querySnapshot = await getDocs(
        collection(db, "Cart" + authUser.uid)
      );
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProfile(newData);
      console.log(newData);
    } catch (error) {
      alert("error");
      console.error("Error fetching menu: ", error);
    }
  };

  
   
  const handleProfileInfo = async () => {
    try {
      const authUser = getAuth().currentUser;
  
      if (authUser) {
        const querySnapshot = await getDocs(collection(db, "test" + authUser.email));
  
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProfileInfo(newData);
      }
    } catch (error) {
      alert('error');
      console.error("Error fetching profileInfo: ", error);
    }
  };
  
  useEffect(() => {
    const storedProfileInfo = JSON.parse(localStorage.getItem("profileInfo"));
    if (storedProfileInfo) {
      setProfileInfo(storedProfileInfo);
    } else {
      handleProfileInfo();
    }
  }, []);

  // Save profileInfo to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  }, [profileInfo]);


  const navigate = useNavigate()
  const [bookingInfo, setBookingInfo] = useState([]);
  const handleFormSubmit = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        // Reference to the 'Cart' collection where owner_uid is equal to the authenticated user's uid
        const cartCollectionRef = collection(db, "Cart" + authUser.uid);

        // Get documents from the collection
        const querySnapshot = await getDocs(cartCollectionRef);

        // Extract data from each document and update the state
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookingInfo(newData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    try {
      const storedBookingInfo = localStorage.getItem('bookingInfo');
      if (storedBookingInfo) {
        setBookingInfo(JSON.parse(storedBookingInfo));
      } else {
        handleFormSubmit();
      }
    } catch (error) {
      console.error('Error processing stored data:', error);
    }
  }, []);

  return (
    <div className='container'>
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{marginBottom:'20px'}}>
        <button className="btn" onClick={() => navigate("/Home")}>
            Home
          </button>
          <button className="btn2" style={{marginTop:'30px'}}>Log Out</button>
        </div>
      </div>
      <div className='container1'>
        <Pic/>
        <div className="profile-container">
          <h1>Profile</h1>
          {isEditing ? (
            <div className="profile-details">
              <div className="detail">
                <span className="label">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Phone No.:</span>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail">
                <span className="label">Address:</span>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="buttons">
                <button className="btn2" onClick={handleSaveClick}>Save</button>
                <button className="btn2" onClick={handleCancelClick}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="profile-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Name}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Phone No.:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Number}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Email}</div>: <div></div>}</span>
              </div>
              <div className="detail">
                <span className="label">Address:</span>
                <span className="value">{ profileInfo.length > 0 ? <div>{profileInfo[0].Address}</div>: <div></div>}</span>
              </div>
              <div className="buttons">
                <button className="btn2" onClick={handleEditClick}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='bookinginfoContainer' style={{backgroundColor: "#000", width: "900px", height: "160px", borderRadius: "10px" ,paddingTop: "5px" ,marginLeft: "197.9px", paddingLeft: "20px", paddingRight: "20px"}}>
      {bookingInfo.map((booking) => (
        <div key={booking.id} style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          {/* Render specific fields from the booking object */}
          <div>
            <h1 style={{fontSize: "24px", fontWeight: "bold", color: "#fff"}}>RoomName:</h1>
            <p style={{color: "#9D9D9D", fontSize: '20px', fontWeight: "bold"}}>{booking.Room}</p>
            <h1 style={{fontSize: "24px", fontWeight: "bold", color: "#fff"}}>Price:</h1>
            <p style={{color: "#9D9D9D", fontSize: '20px', fontWeight: "bold"}}>{booking.Price}</p>
          </div>
         <div>
          <h1 style={{fontSize: "24px", fontWeight: "bold", color: "#fff"}}> Check in Date:</h1>
           <p style={{color: "#9D9D9D", fontSize: '20px', fontWeight: "bold"}}>{booking.Date}</p>
           <h1 style={{fontSize: "24px", fontWeight: "bold", color: "#fff"}}>Number of Nights:</h1>
           <p style={{color: "#9D9D9D", fontSize: '20px', fontWeight: "bold"}}>{booking.Amount}</p>
         </div>
         <img 
           src={booking.Image}
           style={{width: "150px", height: "150px"}}
           />
          {/* Add more fields as needed */}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
