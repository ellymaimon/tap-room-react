import React from "react";
import PropTypes from 'prop-types'

function Footer(props) {
  const footerContainer = {
    height: "50px",
    backgroundColor: "#505050",
    color: "white",
    display: "flex",
    alignItems: "center",
    borderTop: "3px solid goldenrod",
    marginTop: "25px",
    padding: "25px"
  }
  let currentButton =  <button className="btn" onClick={props.onAdminLogin}>Admin Login</button>;
  if (props.isAdmin) {
    currentButton =  <button className="btn" onClick={props.onAdminLogout}>Admin Logout</button>;
  }
  return (
    <div style={footerContainer}>
      {currentButton}
    </div>
  );
}

Footer.propTypes = {
  onAdminLogin: PropTypes.func.isRequired,
  onAdminLogout: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

export default Footer;