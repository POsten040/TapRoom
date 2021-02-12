import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
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
        <input type="hidden" name="pintsLeft" value="120"></input>
        <Button id="formSubmitButton" className="btn" type="submit">{props.buttonText}</Button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;