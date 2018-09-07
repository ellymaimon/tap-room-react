import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const { name, brewer, description, abv, price, remaining } = props;
  return(
    <div>
      <h2>{name} by {brewer}</h2>
      <h3><em>{description}</em></h3>
      <h4>ABV: {abv} | Price: {price}</h4>
      <p>There are {remaining} pints remaining.</p>
      <button>Edit Keg (will only be available if on admin page)</button>
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Keg;