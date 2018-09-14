import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import { Link } from "react-router-dom";

const adminWelcomeContainer = {
  display: "flex",
  border: "2px solid #844949",
  maxWidth: "600px",
  margin: "0 auto",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "25px"
}

const bodyContainer = {
  maxWidth: "1200px",
  margin: "0 auto"
}

const Body = (props) => {
  let adminView = null;
  if(props.isAdmin) {
    adminView = <div style={adminWelcomeContainer}>
                  <h2>Welcome, employee!</h2>
                  <button><Link to="/newkeg">Add Keg</Link></button>
                </div>
  }
  return (
    <div style={bodyContainer}>
      <h1>What's On Tap?</h1>
      {adminView}
      <KegList isAdmin={props.isAdmin} />
    </div>
  );
}

Body.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default Body
