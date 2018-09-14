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

  const linkStyle = {
    color: "white",
    fontSize: "1.2em"
  }

  return (
    <div>
      <h1 style={headerStyle}>🍺 React Tap Room 🍺</h1>
      <div style={headerContainer}>
        <Link style={linkStyle} to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;