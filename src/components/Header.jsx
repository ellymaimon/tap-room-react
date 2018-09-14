import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerContainer = {
    backgroundColor: "#505050",
    borderBottom: "4px solid goldenrod",
    marginBottom: "25px",
    padding: "25px"
  }

  const headerStyle = {
    textAlign: "center"
  }

  return (
    <div>
      <h1 style={headerStyle}>🍺 React Tap Room 🍺</h1>
      <div style={headerContainer}>
        <Link to="/"><button className="btn">Home</button></Link>
      </div>
    </div>
  );
}

export default Header;