import React, { useState, useEffect } from "react";
import "./Home.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function Rooms() {
    const [floor1, setFloor1] = useState([]);
    const [second, setSecond] = useState([]);
    const [thrid, setThrid] = useState([]);
  
    const fetchCategory = async (category) => {
        try {
          const querySnapshot = await getDocs(collection(db, category));
          const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setFloor1(newData);
          console.log(newData)
         
        } catch (error) {
          console.error(`Error fetching ${category}: `, error);
          throw error;
        }
      };
  

      useEffect(()=>{
        fetchCategory("floor1")
      }, [])
      
      const test = (category) => {
        alert(category)
        fetchCategory(category);
      };
      

const navigate =  useNavigate()

      const handleClick =((category)=>{
        navigate("/Details", { state: category });


      })
      

  return (
    <div className="container1">

        <div className='room'>
            <div className='inspire'>
                <h1 className="maintext">
                    Inspired Loading <br/>
                    Perfect Place Most<br/>
                    Popular Rooms
                </h1>
                <div className='btnRoom'>
                <button className='btn4' onClick={() => test("floor1")}>F1-R1,R2...</button>
                <button className='btn4' onClick={() => test("second")}>F2-R1,R2...</button>
                <button className='btn4' onClick={() => test("thrid")}>F3-R1,R2...</button>

                </div>
            </div>
            <div className='pic'></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} >
        {floor1.map((category) => (
         <div onClick={()=>handleClick(category)}><button key={category.id} style={{color: 'white', border: 'none', width: '380px', height: '400px', cursor: 'pointer', marginTop: '70px'}}>
                <div className='show'>
                <img className='roomImg' src={category.image} alt="React Image" />
                 <h1 className='name'>{category.name}</h1>
                 <h2 className='details'>{category.details}</h2>
                 <h1 className='night'>R{category.price} <span style={{fontSize: '14px',fontWeight: '600', color: 'var(--soft-gray, #9D9D9D)'}}>/night</span></h1>
                </div>
            </button></div> 
            ))}
        </div>
        <div className='activities'>
            <div className='we'>
                <h1 className='text5'>
                We strive to provide a <br/>
                range of facilities and<br/>
                amenities to enhance<br/>
                your stay and ensure<br/>
                your comfort.
                </h1>

            </div>
            <div className='act'>
            <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct'></div>
                    <div>
                        <h1 className='most'>Most Baggage Hold</h1>
                        <h2 className='hold'>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout. The point of<br/> using Lorem Ipsum is that it has a more-or-less normal distribution of<br/> letters, </h2>
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct1'></div>
                    <div>
                        <h1 className='most'>Lunch & Dinner</h1>
                        <h2 className='hold'>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout. The point of<br/> using Lorem Ipsum is that it has a more-or-less normal distribution of<br/> letters, </h2>
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct2'></div>
                    <div>
                        <h1 className='most'>Beauty & Spa</h1>
                        <h2 className='hold'>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout. The point of<br/> using Lorem Ipsum is that it has a more-or-less normal distribution of<br/> letters, </h2>
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct3'></div>
                    <div>
                        <h1 className='most'>Beauty & Spa</h1>
                        <h2 className='hold'>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout. The point of<br/> using Lorem Ipsum is that it has a more-or-less normal distribution of<br/> letters, </h2>
                    </div>
                </div>

            </div>
        </div>

        <div className='deluxe'>
            <div className='queen'></div>
            <div className='roomtext'>
                <h1 className='roomtext'>Deluxe Queen Room</h1>
                <p className='word'>Deluxe Rooms offer more space, a large desk, and a
                     spacious closet perfect for a long stay or a couple looking
                     for comfort. Rooms ending in -001 and -002 are Deluxe
                     Rooms with One Queen Bed so please keep in mind that the 
                    layout of the furniture may vary from room to room.
<br/><br/>
                    View our floor plans to compare the layouts of each room. 
                    Entrance door width is 32 ½”,  
                   bathroom door width is 32 ½”. Please note that room does not have accessible features.
                  These rooms are available with Wheelchair Accessible
                  features and amenities.</p>
            </div>
        </div>

        <div className='contact'>
            <div className='we'>
                <h1 className='text5'>
                For more personal &<br/>
                deeper understanding<br/>
                of our estabilshment.<br/> 
                Contact us ON :
                </h1>

            </div>
            <div className='act'>
            <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct4'></div>
                    <div>
                        <h1 className='most'>+081-453-0011</h1>
                       
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct5'></div>
                    <div>
                        <h1 className='most'>@AstonHotel.com</h1>
                       
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct6'></div>
                    <div>
                        <h1 className='most'>#AstonHotel.com</h1>
                        
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', height: '94px', width: '446px' }}>
                    <div className='imgAct7'></div>
                    <div>
                        <h1 className='most'>@AstonHotel/real.com</h1>
                       
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Rooms