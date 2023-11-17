import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function Pic() {
  const initialProfilePic = '../image/icons8-user-100.png';

  const [imageUpload, setImageUpload] = useState(false);
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || initialProfilePic
  );
  const [src, setSrc] = useState(null);

  useEffect(() => {
    localStorage.setItem("profilePic", profilePic);
  }, [profilePic]);

  const onClose = () => {
    saveProfilePic();
    setImageUpload(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image')) {
      const imageUrl = URL.createObjectURL(file);
      setSrc(imageUrl);
      setProfilePic(imageUrl);
    }
  };

  const saveProfilePic = () => {
    // Perform save logic here if needed
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: '300px',
            height: '400px',
            overflow: 'hidden',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onClick={() => setImageUpload(true)}
            src={profilePic}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/*"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: "pointer"
            }}
            onChange={handleProfilePicChange}
          />
        </div>

        <Dialog
          visible={imageUpload}
          header={() => (
            <p style={{ fontWeight: "bold", color: "black" }}>
              Update Profile
            </p>
          )}
          onHide={onClose}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                border: '4px solid red',
                cursor: "pointer"
              }}
              src={src || profilePic}
              alt="Profile"
            />

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button style={{cursor: "pointer"}} onClick={onClose} label="Save" icon="pi pi-check" />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Pic;
