import React from 'react'
import { Redirect } from 'react-router-dom'

const EditKegForm = (props) => {

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

  const handleEditKegFormSubmission = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let brewer = e.target.brewer.value;
    let description = e.target.description.value;
    let abv = e.target.abv.value;
    let price = e.target.price.value;
    let remaining = e.target.remaining.value;

    if (name == "" || brewer == "" || description == "" || abv == "" || price == "" || remaining == "") {
      alert("Oops, could not submit your form. Please fill out all of the inputs in the form.")
    } else if (remaining < 0 || remaining > 124 || isNaN(remaining)) {
      alert("Oops, could not submit your form. Please enter a number between 0 and 124 for the remaining pints.")
    } else if (isNaN(abv)) {
      alert("Oops, could not submit your form. Please enter a number for the abv.")
    } else if (isNaN(price)) {
      alert("Oops, could not submit your form. Please enter a number for the price.")
    } else {
      props.location.state.onEditKeg({
        name: name,
        brewer: brewer,
        description: description,
        abv: abv,
        price: price,
        remaining: remaining,
        id: props.location.state.kegId
      })
      clearForm(e, name, brewer, description, abv, price, remaining);
    }
  }

  const clearForm = (e, name, brewer, description, abv, price, remaining) => {
    e.target.name.value = "";
    e.target.brewer.value = "";
    e.target.description.value = "";
    e.target.abv.value = "";
    e.target.price.value = "";
    e.target.remaining.value = "";
    
    e.target.name.placeholder = `Now: ${name}`;
    e.target.brewer.placeholder = `Now: ${brewer}`;
    e.target.description.placeholder = `Now: ${description}`;
    e.target.abv.placeholder = `Now: ${abv}`;
    e.target.price.placeholder = `Now: ${price}`;
    e.target.remaining.placeholder = `Now: ${remaining}`;
  }

  if(props.location.state === undefined) {
    return <Redirect to="/" />
  }
  else {
    return (
      <div>
        <form style={formStyle} onSubmit={handleEditKegFormSubmission}>
          <div style={formGroupStyle}>
            <label>New Name:</label>
            <input type="text" name="name" placeholder={`Old name: ${props.location.state.kegName}`} />
          </div>
          <div style={formGroupStyle}>
            <label>New Brewer:</label>
            <input type="text" name="brewer" placeholder={`Old brewer: ${props.location.state.kegBrewer}`}/>
          </div>
          <div style={formGroupStyle}>
            <label>New Description:</label>
            <input type="text" name="description" placeholder={`Old description: ${props.location.state.kegDescription}`}/>
          </div>
          <div style={formGroupStyle}>
            <label>New ABV:</label>
            <input type="text" name="abv" placeholder={`Old ABV: ${props.location.state.kegAbv}`}/>
          </div>
          <div style={formGroupStyle}>
            <label>New Price:</label>
            <input type="text" name="price" placeholder={`Old price: ${props.location.state.kegPrice}`}/>
          </div>
          <div style={formGroupStyle}>
            <label>How many pints remanining:</label>
            <input type="text" name="remaining" placeholder={`Old remainder: ${props.location.state.kegRemaining}`}/>
          </div>
          <button className="btn" type="submit">Finish Editing Keg</button>
        </form>      
      </div>
    )
  }
}

export default EditKegForm;
