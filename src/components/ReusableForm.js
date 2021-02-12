import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  console.log(props.formSubmissionHandler);
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
        <br />
        <label>Price</label>
        <input type="string" name="flavor" placeholder="Flavor"></input>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;