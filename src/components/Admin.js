import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate} from "react-router-dom";

function Admin() {
  const [cart, setCart] = useState([]);
  
  const navigate =  useNavigate()


  const Signout = () => {
    signOut(auth)
      .then(() => {
        alert('Log out successful');
       navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const fetchCartData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Cart"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const filteredData = query
        ? newData.filter((item) => {
            const itemDate = new Date(item.Date);
            const inputDate = new Date(query);
            return (
              itemDate.getFullYear() === inputDate.getFullYear() &&
              itemDate.getMonth() === inputDate.getMonth() &&
              itemDate.getDate() === inputDate.getDate()
            );
          })
        : newData;

      console.log("Filtered Data:", filteredData);

      setCart(filteredData);
    } catch (error) {
      alert("Error fetching data: " + error.message);
      console.error("Error fetching menu: ", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchCartData();
  }, []);

  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{ display: "flex", flexDirection: "row" }}>
          <h1 className="maintext" style={{ marginRight: "450px" }}>
            Admin Page
          </h1>

            <button className="btn2" onClick={Signout} style={{ marginTop: "30px" }}>
              Log Out
            </button>

        </div>
      </div>

      <form
        style={{ alignItems: "center", marginBottom: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          fetchCartData();
        }}
      >
        <input
          type="date"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>

      <div className="admin" style={{ display: 'flex', flexDirection: 'row'}}>
        <div className="left3">
          <div className="btnRoom" style={{ display: 'flex', flexDirection: 'column', marginTop: '30px', height: '700px'}}>
            <button style={{marginTop: '10px', marginBottom: '20px'}} className="btn4" >
              Bookings
            </button>
            <button  style={{marginTop: '10px', marginBottom: '20px'}} className="btn4">
              Rooms
            </button>

          </div>
        </div>
        <div className="right3">
        <table>
            <thead style={{backgroundColor: '#000', color:'#fff'}}>
              <tr>
                <th className="tablehead">Room</th>
                <th className="tablehead">Occupancy</th>
                <th className="tablehead">Phone No.</th>
                <th className="tablehead">Arrival</th>
                <th className="tablehead">No. Nights</th>
              </tr>
            </thead>
            <tbody>
              {cart.filter((item) => {
      if (!query) {
        // If no date input, show all records
        return true;
      }
      
      // Parse dates and compare
      const itemDate = new Date(item.Date);
      const inputDate = new Date(query);

      // Check if the item's date matches the input date
      return (
        itemDate.getFullYear() === inputDate.getFullYear() &&
        itemDate.getMonth() === inputDate.getMonth() &&
        itemDate.getDate() === inputDate.getDate()
      );
    }).map((cart) =>(
              <tr  key={cart.id}>
                <td>{cart.Room}</td>
                <td>{cart.Profile}</td>
                <td>{cart.Number}</td>
                <td>{cart.Date}</td>
                <td>{cart.Amount}</td>
              </tr>
              ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
