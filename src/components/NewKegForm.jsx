import React from "react";

function NewKegForm(){
  return (
    <div>
      <style jsx>
        {`
        form {
          max-width: 400px;
          margin: 0 auto;
          border: 2px solid lightgrey;
          padding 25px;
          border-radius: 25px;
        }
        label {
          font-weight: bold;
        }
        .form-group {
          display: grid;
          grid-template-columns: 25% 75%;
          margin-bottom: 10px;
        }
        `}
      </style>

      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Brewer:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>ABV:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text"/>
        </div>
        <button type="submit">Create Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;