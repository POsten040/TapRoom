import React from 'react';
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddKeg(props) {

  function handleNewProductFormSubmission(e) {
    e.preventDefault();
    props.onNewProductCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      flavor: e.target.flavor.value,
      id: v4()
    })
  }
  const styledForm = {

  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Add to Cart"/>
    </>
  );
}

AddKeg.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default AddKeg;