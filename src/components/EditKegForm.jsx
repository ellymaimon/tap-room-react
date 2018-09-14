import React from 'react'

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

  return (
    <div>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label>New Name:</label>
          <input type="text" name="name" placeholder="old name will go here"/>
        </div>
        <div style={formGroupStyle}>
          <label>New Brewer:</label>
          <input type="text" name="brewer"/>
        </div>
        <div style={formGroupStyle}>
          <label>New Description:</label>
          <input type="text" name="description"/>
        </div>
        <div style={formGroupStyle}>
          <label>New ABV:</label>
          <input type="text" name="abv"/>
        </div>
        <div style={formGroupStyle}>
          <label>New Price:</label>
          <input type="text" name="price"/>
        </div>
        <button className="btn" type="submit">Finish Editing Keg</button>
      </form>      
    </div>
  )
}

export default EditKegForm;
