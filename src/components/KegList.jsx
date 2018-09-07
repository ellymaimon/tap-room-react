import React from 'react';
import { KEGLIST } from './MockData';

function KegList() {
  console.log(KEGLIST);
  
  return (
    <div>
      <p>{KEGLIST.masterKegList[0].name}</p>
    </div>
  );
}

export default KegList;