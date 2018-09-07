import React from "react";
import { Link } from "react-router-dom";

function Header(){
  var link = {
    textDecoration: "none",
    color: "white",
    marginLeft: "50px",
    fontSize: "24px"
  }
  return (
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        .nav {
          height: 80px;
          background-color: #505050;
          color: white;
          display: flex;
          align-items: center;
          border-bottom: 5px solid crimson;
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