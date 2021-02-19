import React from 'react';
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKeg(props) {
  function handleEditKegFormSubmission(e) {
    e.preventDefault();
    props.onClickingEdit({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      flavor: e.target.flavor.value,
      pintsLest: parseInt(e.target.pintsLeft.value),
      id: e.target.id.value
    })
  }
  return (
    <>
      <ReusableForm
      keg = {props.keg}
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update This Keg"
      buttonStyle={props.buttonStyle}/>
    </>
  );
}

EditKeg.propTypes = {
  onClickingEdit: PropTypes.func
};

export default EditKeg;