import React from 'react';
import PropTypes from 'prop-types'
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      {props.kegList.map((keg) =>
        <Keg {...keg}
             key={keg.id}
             isAdmin={props.isAdmin}
             onEditKeg = {props.onEditKeg} />
      )}
    </div>
  );
}

KegList.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  kegList: PropTypes.array.isRequired,
  onEditKeg: PropTypes.func.isRequired
}

export default KegList;