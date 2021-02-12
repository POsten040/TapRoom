import React from 'react';
import SplashPage from './SplashPage';
// import Button from 'reactstrap';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splashPageVisible: true,
      kegFormVisible: false,
      selectedKeg: null,
      editing: false
    }
  }
  handleClick = () => {
    if(this.state.splashPageVisible){
      this.setState({
        splashPageVisible: false,
        kegFormVisible: true,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        kegFormVisible: !prevState.kegFormVisible,
      }));
    }
  }
  render() {
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      currentState = <SplashPage />
      buttonText = "Get Started"
    }
    return (
      <>
        {currentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default KegControl;