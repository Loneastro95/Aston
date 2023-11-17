import './profile.css';
import React, { useState } from 'react';
import Pic from './pic';


const Profile = () => {
  const initialUser = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main Street, City, Country',
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

  const handleSaveClick = () => {
    // Here you can add logic to save the updated user data
    // For simplicity, let's just log the updated user object
    console.log('Updated user:', user);

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setUser(initialUser);
    setIsEditing(false);
  };

  return (
    <div className='container'>
      <div className="top">
        <h1 className="text">Aston</h1>
        <div className="button" style={{marginBottom:'20px'}}>
        
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
                <span className="value">{user.name}</span>
              </div>
              <div className="detail">
                <span className="label">Phone No.:</span>
                <span className="value">{user.phone}</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="detail">
                <span className="label">Address:</span>
                <span className="value">{user.address}</span>
              </div>
              <div className="buttons">
                <button className="btn2" onClick={handleEditClick}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
