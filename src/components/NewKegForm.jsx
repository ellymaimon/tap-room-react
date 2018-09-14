import React from "react";
import PropTypes from 'prop-types';

function NewKegForm(props) {
  const formGroupStyle = {
    display: "grid",
    gridTemplateColumns: "25% 75%",
    marginBottom: "10px"
  }
  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    border: "2px solid lightgrey",
    padding: "25px",
    borderRadius: "25px"
  }

  const handleNewKegFormSubmission = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let brewer = e.target.brewer.value;
    let description = e.target.description.value;
    let abv = e.target.abv.value;
    let price = e.target.price.value;

    props.onAddNewKeg({
      name: name,
      brewer: brewer,
      description: description,
      abv: abv,
      price: price
    })
  }

  return (
    <div>
      <form style={formStyle} onSubmit={handleNewKegFormSubmission}>
        <div style={formGroupStyle}>
          <label>Name:</label>
          <input type="text" name="name"/>
        </div>
        <div style={formGroupStyle}>
          <label>Brewer:</label>
          <input type="text" name="brewer"/>
        </div>
        <div style={formGroupStyle}>
          <label>Description:</label>
          <input type="text" name="description"/>
        </div>
        <div style={formGroupStyle}>
          <label>ABV:</label>
          <input type="text" name="abv"/>
        </div>
        <div style={formGroupStyle}>
          <label>Price:</label>
          <input type="text" name="price"/>
        </div>
        <button className="btn" type="submit">Create Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onAddNewKeg: PropTypes.func.isRequired
}

export default NewKegForm;