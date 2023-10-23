import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

function Admin() {
  const [floor1, setFloor1] = useState([]); // State to store fetched data
  const authUser = getAuth().currentUser; // Get the current user

  const fetchCategory = async (category) => {
    try {
      // Fetch documents from the specified collection (e.g., "Cart" + authUser.uid + category)
      const querySnapshot = await getDocs(collection(db, "Cart" + authUser.uid, category));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFloor1(newData); // Update state with fetched data
    } catch (error) {
      console.error(`Error fetching ${category}: `, error);
      // Handle error if necessary
    }
  };

  useEffect(() => {
    fetchCategory("floor1"); // Fetch "floor1" data on component mount
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const test = (category) => {
    alert(category);
    fetchCategory(category); // Fetch data for the selected category
  };

  return (
    <div className="container">
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{ marginBottom: "20px", display: "flex", flexDirection: "row" }}>
          <h1 className="maintext" style={{ marginRight: "450px" }}>
            Admin Page
          </h1>
          <Link to="/">
            <button className="btn2" style={{ marginTop: "30px" }}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
      <div className="admin" style={{ display: 'flex', flexDirection: 'row'}}>
        <div className="left3">
          <div className="btnRoom" style={{ display: 'flex', flexDirection: 'column', marginTop: '30px'}}>
            <button style={{marginTop: '10px', marginBottom: '20px'}} className="btn4" onClick={() => test("floor1")}>
              F1-R1,R2...
            </button>
            <button  style={{marginTop: '10px', marginBottom: '20px'}} className="btn4" onClick={() => test("second")}>
              F2-R1,R2...
            </button>
            <button className="btn4" onClick={() => test("third")}>
              F3-R1,R2...
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
              {floor1.map((category) =>(
              <tr>
                <td>single</td>
                <td>Ayanda</td>
                <td>084 533 2436</td>
                <td>20/07/2021</td>
                <td>1</td>
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
