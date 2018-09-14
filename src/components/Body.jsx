import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import { Link } from "react-router-dom";

const Body = (props) => {
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

  let adminView = null;

  if(props.isAdmin) {
    adminView = <div style={adminWelcomeContainer}>
                  <h2>Welcome, employee!</h2>
                  <Link to="/newkeg"><button className="btn">Add Keg</button></Link>
                </div>
  }

  return (
    <div style={bodyContainer}>
      <h1>What's On Tap?</h1>
      {adminView}
      <KegList isAdmin={props.isAdmin} kegList={props.kegList} onEditKeg={props.onEditKeg} />
    </div>
  );
}

Body.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  kegList: PropTypes.array.isRequired,
  onEditKeg: PropTypes.func.isRequired,
}

export default Body
