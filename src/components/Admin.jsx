import React from "react";
import PropTypes from 'prop-types';
import KegList from './KegList';
import { Link } from "react-router-dom";

function Admin(props) {
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
      <KegList isAdmin={props.isAdmin} />
    </div>
  );
}

Admin.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default Admin;