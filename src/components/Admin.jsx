import React from "react";
import KegList from './KegList';
import { Link } from "react-router-dom";

function Admin(){
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .welcome {
          display: flex;
          border: 2px solid #844949;
          max-width: 600px;
          margin: 0 auto;
          justify-content: space-around;
          align-items: center;
          border-radius: 25px;
        }
        button {
          height: 30px;
        }
      `}</style>
      <div className="welcome">
        <h2>Welcome, employee!</h2>
        <button><Link to="/newkeg">Add Keg</Link></button>
      </div>
      <KegList/>
    </div>
  );
}

export default Admin;