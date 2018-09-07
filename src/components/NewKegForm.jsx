import React from "react";

function NewKegForm(){
  return (
    <div>
      <style jsx>
        {`
        label {
        
        }
        `}
      </style>

      <form>
        <label>Name:</label>
        <input type="text"/>
        <label>Brewer</label>
        <input type="text"/>
        <label>Description</label>
        <textarea type="text"/>
        <label>ABV</label>
        <input type="text"/>
        <label>Price</label>
        <input type="text"/>
        <button type="submit">Create Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;