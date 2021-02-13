import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ReusableForm(props) {
  const formStyle= {
    backgroundColor: "#33c4cc",
    borderRadius: 10,
    width: 600
  }
  return (
    <>
      <div className="centered">
        <form style={formStyle} onSubmit={props.formSubmissionHandler}>
          <label>Keg Name</label>
          <input type="text" name="name" placeholder="Name"></input>
          <br />
          <select defaultValue={"DEFAULT"} name="brand">
            <option value="DEFAULT" disabled> -- choose brand --</option>
            <option value="BrewMaster">BrewMaster</option>
            <option value="MasterBrew">MasterBrew</option>
            <option value="Sixteen Chickens in an Overcoat">Sixteen Chickens in an Overcoat</option>
          </select>
          <br />
          <label>Price</label>
          <input type="number" name="price" placeholder="Price"></input>
          <br />
          <label>Price</label>
          <input type="string" name="flavor" placeholder="Flavor"></input>
          <br />
          <label>Stock(in pints)</label>
          <input type="number" name="pintsLeft" defaultValue="120"></input>
          <br />
          <Button style={props.buttonStyle} id="formSubmitButton" className="btn" type="submit">{props.buttonText}</Button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;