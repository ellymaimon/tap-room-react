import React from 'react';
import { KEGLIST } from './MockData';
import Keg from './Keg';

function KegList() {
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}
      </style>
      {KEGLIST.masterKegList.map((keg, index) =>
        <Keg {...keg} key={index} />
      )}
    </div>
  );
}

export default KegList;