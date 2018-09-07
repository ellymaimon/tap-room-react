import React from 'react';
import { KEGLIST } from './MockData';
import Keg from './Keg';

function KegList() {
  
  return (
    <div>
      {KEGLIST.masterKegList.map((keg, index) =>
        <Keg {...keg} key={index} />
      )}
    </div>
  );
}

export default KegList;