import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  return (
    <React.Fragment>
      <div className="centered">

        <h1>Keg List</h1>
        {props.kegList.map((keg) =>
        
        <Keg
          whenKegClicked = { props.onKegSelection}
          name={keg.name}
          id={keg.id}
          key={keg.id}
        />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  productlist: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;