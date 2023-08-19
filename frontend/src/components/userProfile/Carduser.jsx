import React from "react";

const Carduser = ({collector}) => {
  const userStyles = {
    card: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #293241, #3a4750)",
      color: "#f0f0f0", // Text color
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      border: "1px solid #ddd",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      alignItems: "center",
    },
    imgWrapper: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      overflow: "hidden",
      marginRight: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      border: "4px solid #4d94ff",
      position: "relative",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    badge: {
      position: "absolute",
      bottom: "-5px",
      right: "-5px",
      background: "#4d94ff",
      color: "white",
      borderRadius: "50%",
      padding: "6px",
      fontSize: "12px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    },
    userInfo: {
      width: "60%",
    },
    name: {
      fontFamily: "Georgia, serif",
      marginBottom: "10px",
      fontSize: "20px",
      color: "#f4a261", // Name text color
    },
    contact: {
      marginBottom: "5px",
      fontSize: "16px",
      color: "#a8dadc", // Contact text color
    },
    button: {
      background: "#4d94ff",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      // borderRadius:'50%'
    },
   
  };

  return (
    <div style={userStyles.card}>
      <div style={userStyles.imgWrapper}>
        <img
          style={userStyles.img}
          src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png"
          alt=""
        />
        <span style={userStyles.badge}>1</span>
      </div>

      <div style={userStyles.userInfo} className="user-info">
        <h3 style={userStyles.name}>{collector.collectorName}</h3>
        <h3 style={userStyles.name}>{collector.collectorAddress}</h3>
        <h3 style={userStyles.name}>{collector.walletAddress}</h3>

        <p style={userStyles.contact}>{collector.email}</p>
        {/* <p style={userStyles.contact}>{props.contact}</p> */}
       
      </div>
    </div>
  );
}

export default Carduser;
