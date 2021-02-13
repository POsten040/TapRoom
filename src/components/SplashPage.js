import React from 'react';
import { CardImg } from 'react-bootstrap';
import {Card, CardBody, CardTitle, Jumbotron} from "reactstrap";
import { Animate } from 'react-simple-animate';
import JCVD from '../assets/JCVD.jpg';
import rainbow from '../assets/rainbow.png'
import './../index.css';


function SplashPage(){
  const imageSize = {
    width: 200,
  }
  const header = {
    width: 800,
    fontFamily: 'Modak',
    fontSize: 'xx-large'
    }
  return (
    
  <>
  <Animate
    play={true}
    duration={1.5}
    delay={.1}
    start={{transform: 'translate(-350px,0)'}}
    end={{transform: 'translate(270px, 0)'}}
    >
      <img src={JCVD} style={imageSize} alt="Jean Claude Van Damme"/>
  </Animate>
  <Card >
    <CardBody >
      <CardTitle ><Jumbotron>Welcome to the best Damme TapRoom in Town</Jumbotron></CardTitle>
      
    </CardBody>
  </Card>
  </>
  )
}

export default SplashPage;