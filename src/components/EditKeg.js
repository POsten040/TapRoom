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
      id: v4()
    })
  }
  
  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update This Keg"/>
    </>
  );
}

EditKeg.propTypes = {
  onClickingEdit: PropTypes.func
};

export default EditKeg;