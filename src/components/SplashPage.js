import React from 'react';
import { CardImg } from 'react-bootstrap';
import {Card, CardBody, CardTitle} from "reactstrap";


function SplashPage(){
  return (
  <>
    <Card>
      <CardImg src="../assets/jeanClaude.gif" alt="Jean Claude Van Damme"/>
      <CardBody>
        <CardTitle>Welcome to the best Damme TapRoom in Town</CardTitle>
      </CardBody>
    </Card>
  </>
  )
}

export default SplashPage;