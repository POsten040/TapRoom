import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ReusableForm(props) {
  const formStyle= {
    backgroundColor: "#999b64",
    borderRadius: 10,
    width: 600,
    padding: 10
  }
  const greenButton = {
    backgroundColor: '#2fd05a',
  }
  let kegToEdit;
  if(props.keg === undefined){
    kegToEdit = {
      name: null,
      brand: null,
      price: null,
      flavor: null,
      pintsLeft: null
    };
  } else {
    kegToEdit = props.keg;
  }
  return (
    <>
      <form style={formStyle} onSubmit={props.formSubmissionHandler}>
        <label>Keg Name</label>
        <input defaultValue={kegToEdit.name}  type="text" name="name" placeholder="Name"></input>
        <br />
        <select defaultValue={kegToEdit.brand} name="brand">
          <option value="DEFAULT" disabled> -- choose brand --</option>
          <option value="BrewMaster">BrewMaster</option>
          <option value="MasterBrew">MasterBrew</option>
          <option value="Sixteen Chickens in an Overcoat">Sixteen Chickens in an Overcoat</option>
        </select>
        <br />
        <label>Price</label>
        <input defaultValue={kegToEdit.price} type="number" name="price" placeholder="Price"></input>
        <br />
        <label>Flavor</label>
        <input defaultValue={kegToEdit.flavor} type="string" name="flavor" placeholder="Flavor"></input>
        <br />
        <label>Stock(in pints)</label>
        <input defaultValue={kegToEdit.pintsLeft} type="number" name="pintsLeft"></input>
        <br />
        <input type="hidden" name="id" value={kegToEdit.id}></input>
        <Button style={greenButton} id="formSubmitButton" className="btn" type="submit">{props.buttonText}</Button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;