import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function Product(props){
  return (
    <>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h4>{props.name}</h4>
          <div className="inner-div">
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.flavor}</p>
          </div>
          <hr/>
      </div>
    </>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.int.isRequired,
  flavor: PropTypes.string.isRequired
};

export default Keg;