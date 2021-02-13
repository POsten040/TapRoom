
import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from "react-simple-animate";
import { Button, Card, CardHeader, CardBody, CardFooter, Container, Row, Col } from 'reactstrap';


function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell, onClickingStock } = props;
  const styleBody = {
    backgroundColor: "#999b64",
    borderRadius: 10,
    padding: 10
  }
  const styleHead = {
    backgroundColor: "#6ab16f",
    borderRadius: 10,
    padding: 10
  }
  const yellowButton = {
    backgroundColor: "#ec9f13",
  }
  const blueButton = {
    backgroundColor: "#88b035",
  }
  return (
    <>
    <div>
      <Card>
        <Animate
          play={true}
          duration={1}
          delay={.1}
          start={{transform: 'translate(0,-200px)'}}
          end={{transform: 'translate(0, 0)'}}
        >
          <CardHeader style={styleHead}>Product Detail</CardHeader>
          <CardBody style={styleBody}>
            <p>Hi My Name Is: {keg.name}</p>
            <p>Brand: {keg.brand}</p>
            <p>Price: {keg.price}</p>
            <p>Flavour: {keg.flavor}</p>
            <p>Pints Remaining: {keg.pintsLeft}</p>
          </CardBody>
          <CardFooter>
            <Container>
              <Row>
                <Col>
                  <Button style={yellowButton} onClick={()=> onClickingDelete(keg.id)}>Delete This keg</Button>
                  <Button style={blueButton} onClick={()=> onClickingEdit(keg.id)}>Edit This Keg</Button>
                </Col>
                <Col>
                  <Button style={yellowButton} onClick={()=> onClickingSell(keg.id)}>Sell One Pint</Button>
                  <Button style={blueButton} onClick={()=> onClickingStock(keg.id)}>Stock One Pint</Button>
                </Col>
              </Row>
            </Container>
          </CardFooter>
        </Animate>
      </Card>
    </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;