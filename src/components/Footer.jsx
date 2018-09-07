import React from "react";
import { Link } from "react-router-dom";

function Footer(){
  var link = {
    textDecoration: "none",
    color: "white",
    marginLeft: "50px",
    fontSize: "18px"
  }
  return (
    <div className="nav">
     <style jsx>{`
        h1 {
          text-align: center;
        }
        .nav {
          height: 50px;
          background-color: #505050;
          color: white;
          display: flex;
          align-items: center;
          border-top: 3px solid goldenrod;
          margin-top: 25px;
        }
      `}</style>

      <Link style={link} to="/admin">Admin</Link>
    </div>
  );
}

export default Footer;