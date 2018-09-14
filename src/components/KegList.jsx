import React from 'react';
import PropTypes from 'prop-types'
import { KEGLIST } from './MockData';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      {KEGLIST.masterKegList.map((keg, index) =>
        <Keg {...keg}
             key={index}
             isAdmin={props.isAdmin}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default KegList;