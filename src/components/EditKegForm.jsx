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

  if(props.location.state === undefined) {
    return <Redirect to="/" />
  }
  else {
    return (
      <div>
        <form style={formStyle}>
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
          <button className="btn" type="submit">Finish Editing Keg</button>
        </form>      
      </div>
    )
  }
}

export default EditKegForm;
