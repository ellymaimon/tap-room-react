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
          display: flex;
          align-items: center;
        }
        p {
          font-size: 22px;
          margin-left: 50px;
          text-decoration: none;
        }
        
      `}
      </style>

      <h1>🍺 React Tap Room 🍺</h1>
      <div className="nav">
        <p><Link to="/">Home</Link></p>
      </div>
    </div>
  );
}

export default Header;