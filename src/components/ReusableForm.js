import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  console.log(props.formSubmissionHandler);
  return (
    <>
      
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;