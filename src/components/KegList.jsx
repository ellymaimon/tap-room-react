import React from 'react';
import PropTypes from 'prop-types'
import { KEGLIST } from './MockData';
import Keg from './Keg';

function KegList(props) {
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}
      </style>
      <h1>What's On Tap?</h1>
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