import React from 'react';
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
// import Button from 'reactstrap';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: [],
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
  handleAddingNewKegToList = (newKeg) =>{
    console.log(newKeg);
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // const newMasterKegList = [...this.state.masterKegList, newKeg];
    this.setState({
      masterKegList: newMasterKegList, 
      kegFormVisible: false
    })
  } 
  render() {
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      currentState = <SplashPage />
      buttonText = "Get Started"
    } else if(this.state.kegFormVisible){
      
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "View Keg List"
    } else {
      
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add a Keg"
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