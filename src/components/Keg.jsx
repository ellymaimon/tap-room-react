import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const { name, brewer, description, abv, price, remaining } = props;
  let adminView = null;
  if (props.isAdmin) {
    adminView = <button className="btn">Edit Keg</button>;
  }
  return(
    <div>
      <h2>{name} by {brewer}</h2>
      <h3><em>{description}</em></h3>
      <h4>ABV: {abv} | Price: {price}</h4>
      <p>There are {remaining} pints remaining.</p>
      {adminView}
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default Keg;