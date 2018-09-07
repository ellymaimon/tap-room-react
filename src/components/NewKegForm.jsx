import React from "react";

function NewKegForm(){
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text"/>
        <label>Brewer</label>
        <input type="text"/>
        <label>Description</label>
        <input type="text"/>
        <label>ABV</label>
        <input type="text"/>
        <label>Price</label>
        <input type="text"/>
      </form>
    </div>
  );
}

export default NewKegForm;