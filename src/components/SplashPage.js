import React from 'react';
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";
import { Animate } from 'react-simple-animate';
import JCVD from '../assets/JCVD.jpg';
import bottle from '../assets/bottle.PNG';
import colorCell from '../assets/colorCell.gif';
import './../index.css';


function SplashPage(){
  const JVCDImageSize = {
    width: 200,
  }
  const bottleImageSize = {
    width: 50,
  }
  const background = {
    backgroundImage: `url(${colorCell})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fcfcfb",
    fontFamily: "Modak",
    letterSpacing: "2px",
    fontSize: "60px",
    padding: "5px",
    margin: "10px",
    borderRadius: "15px",
    width: "auto",
    justifySelf: "center",
    textShadow: '2px 2px 5px #2c2618'
  }
  let s = 0
  return (
    
  <>
  <Container >
    <Row id="whiteSplashPageBar">
      <Col>
        <Animate
          play={true}
          duration={1.5}
          delay={.1}
          start={{transform: `translate(-600px,${s})`}}
          end={{transform: 'translate(80px, 0)'}}
          >
            <img src={JCVD} style={JVCDImageSize} alt="Jean Claude Van Damme"/>
        </Animate>
      </Col>
      <Col>
        <Animate
          play={true}
          duration={.3}
          delay={1.5}
          start={{transform: 'translate(-100px,0)'}}
          end={{transform: 'rotate(75deg)'}}
          >
            <img id="bottle" src={bottle} style={bottleImageSize} alt="Jean Claude Van Damme"/>
        </Animate>
      </Col>
    </Row>
  </Container>
  <Card  style={background}>
    <CardBody>
      <CardTitle ><div>Welcome to the best Damme TapRoom in Town</div></CardTitle>
    </CardBody>
  </Card>
  </>
  )
}

export default SplashPage;