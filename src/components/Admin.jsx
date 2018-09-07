import React from "react";
import KegList from './KegList';
import { Link } from "react-router-dom";

function Admin(){
  return (
    <div>
      <h2>Welcome, employee!</h2>
      <Link Link to="/newkeg"><button>Add Keg</button></Link>
      <h1>Kegs Available:</h1>
      <KegList/>
    </div>
  );
}

export default Admin;