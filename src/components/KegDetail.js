
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';


function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;
  const styleBody = {
    backgroundColor: "#d6dc72",
    borderRadius: 10,
    padding: 10
  }
  const styleHead = {
    backgroundColor: "#72d6dc",
    borderRadius: 10,
    padding: 10
  }
  return (
    <>
    <Card>
      <CardHeader style={styleHead}>Product Detail</CardHeader>
      <CardBody style={styleBody}>
        <p>Hi My Name Is: {keg.name}</p>
        <p>Brand: {keg.brand}</p>
        <p>Price: {keg.price}</p>
        <p>Flavour: {keg.flavor}</p>
        <p>Pints Remaining: {keg.pintsLeft}</p>
      </CardBody>
      <CardFooter>
        <Button onClick={()=> onClickingDelete(keg.id)}>Delete This keg</Button>
        <Button onClick={()=> onClickingEdit(keg.id)}>Edit This Keg</Button>
        <Button onClick={()=> onClickingSell(keg.id)}>Sell One Pint</Button>
        {/* <Button onClick={()=> onClickingStock()}>Stock One Pint</Button> */}
        <hr/>
      </CardFooter>
    </Card>
    </>
    // <React.Fragment>
    //   <div style={styleComponent}>
    //     <>Product Detail</h1>
    //     <p>Hi My Name Is: {keg.name}</p>
    //     <p>Brand: {keg.brand}</p>
    //     <p>Price: {keg.price}</p>
    //     <p>Flavour: {keg.flavor}</p>
    //     <p>Pints Remaining: {keg.pintsLeft}</p>
    //     <button onClick={()=> onClickingDelete(keg.id)}>Delete This keg</button>
    //     <button onClick={()=> onClickingEdit(keg.id)}>Edit This Keg</button>
    //     <hr/>
    //   </div>
    // </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;