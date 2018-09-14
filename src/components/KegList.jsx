import React from 'react';
import PropTypes from 'prop-types'
import { KEGLIST } from './MockData';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      {props.kegList.map((keg, index) =>
        <Keg {...keg}
             key={index}
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