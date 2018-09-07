import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <div>

      <style jsx>{`
        h1 {
          text-align: center;
        }
        .nav {
          height: 80px;
          background-color: darkgrey;
          color: white;
        }
      `}
      </style>

      <h1>🍺 React Tap Room 🍺</h1>
      <div className="nav">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;