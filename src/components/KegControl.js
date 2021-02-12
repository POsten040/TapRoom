import React from 'react';
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import KegDetail from './KegDetail';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleDeleteClick = (kegId) => {
    const newMasterKegList = this.state.masterKegList.filter(
      keg => keg.id !== kegId);
    this.setState({
      masterKegList: newMasterKegList, 
      selectedKeg: null});
  }
  handleAddingNewKegToList = (newKeg) =>{
    console.log(newKeg);
    console.log(this.state.masterKegList);
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // const newMasterKegList = [...this.state.masterKegList, newKeg];
    this.setState({
      masterKegList: newMasterKegList, 
      kegFormVisible: false
    })
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
      productFormVisible: true 
    });
  }
  handleSellClick = (id) => {
    console.log(id);
    let kegToSell = this.state.masterKegList.filter(
      keg => keg.id === id)[0];
      kegToSell.pintsLeft = kegToSell.pintsLeft -1;
      console.log(kegToSell)
    this.setState({
      selectedKeg: kegToSell
    })
  }
  viewKegList = () => {
    if(this.state.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else {
      this.setState({
        kegFormVisible: false,
        selectedKeg: null
      })
    }
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
    } else if(this.state.selectedKeg != null) {
      currentState = <KegDetail keg = {this.state.selectedKeg} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText = "View Keg List"
    } else if (this.state.kegFormVisible != true){
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add a Keg"
    }
    return (
      <>
        {currentState}
        <Button className="btn" onClick={this.handleClick}>{buttonText}</Button>
        <Button className="btn" onClick={this.viewKegList}>See Kegs</Button>
      </>
    )
  }
}

export default KegControl;