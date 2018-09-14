import React from 'react';
import PropTypes from 'prop-types'
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      {props.kegList.map((keg) =>
        <Keg {...keg}
             key={keg.id}
             isAdmin={props.isAdmin}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  kegList: PropTypes.array.isRequired
}

export default KegList;