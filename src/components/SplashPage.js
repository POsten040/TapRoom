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
  return (
    
  <>
  
    <Card>
      <CardBody>
        <CardTitle id="splashPageGreet" ><Jumbotron>Welcome to the best Damme TapRoom in Town</Jumbotron></CardTitle>
        <div styles={{ backgroundImage:`url(${rainbow})` }}>

          <Animate
          play={true}
          duration={1.5}
          delay={.1}
          start={{transform: 'translate(0,0px)'}}
          end={{transform: 'translate(900px, 0)'}}
          >
            <img src={JCVD} style={imageSize} alt="Jean Claude Van Damme"/>
          </Animate>
        </div>
      </CardBody>
    </Card>
  </>
  )
}

export default SplashPage;