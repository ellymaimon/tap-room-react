import React from "react";
import { Link } from "react-router-dom";

function Header(){
  var link = {
    textDecoration: "none",
    color: "white",
    marginLeft: "50px",
    fontSize: "22px"
  }
  return (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .nav {
          height: 60px;
          background-color: #505050;
          color: white;
          display: flex;
          align-items: center;
          border-bottom: 4px solid goldenrod;
          margin-bottom: 25px;
        }
      `}</style>

      <h1>🍺 React Tap Room 🍺</h1>
      <div className="nav">
        <Link style={link} to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;