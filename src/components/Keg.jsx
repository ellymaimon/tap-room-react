import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Keg = (props) => {
  const { name, brewer, description, abv, price, remaining, id } = props;

  const handleSellingPint = () => {
    props.onSellingPint(id);
  }
  
  let adminView = null;
  if (props.isAdmin) {
    adminView = <div>
                  <Link to={{ pathname: "/editkeg",
                              state: { kegName: name, 
                                      kegBrewer: brewer,
                                      kegDescription: description,
                                      kegAbv: abv,
                                      kegPrice: price,
                                      kegId: id,
                                      kegRemaining: remaining,
                                      onEditKeg: props.onEditKeg} }}>
                    <button className="btn">Edit Keg</button></Link>
                    <button className="btn" onClick={handleSellingPint}>Sell a pint!</button>
                </div>;
  }
  return(
    <div>
      <h2>{name} by {brewer}</h2>
      <h3><em>{description}</em></h3>
      <h4>ABV: {abv}% | Price: ${price}</h4>
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
  onEditKeg: PropTypes.func.isRequired,
  onSellingPint: PropTypes.func.isRequired
};

export default Keg;