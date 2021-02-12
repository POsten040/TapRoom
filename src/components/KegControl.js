import React from 'react';
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import KegDetail from './KegDetail';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: [],
      splashPageVisible: true,
      kegFormVisible: false,
      kegListVisible: false,
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
    } else if(this.state.kegFormVisible){
      this.setState(({
        kegFormVisible: false
      }));
    } else if(this.state.editing){
      this.setState(prevState => ({
        editing: !prevState.editing
      }))
    } else {
      this.viewKegList();
    }
  }
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleEditingKegInList = (kegToEdit)=> {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
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
    let kegToSell = this.state.masterKegList.filter(
      keg => keg.id === id)[0];
      if(kegToSell.pintsleft == 0){
        alert("All Sold Out Boss")
      } else {
      kegToSell.pintsLeft = kegToSell.pintsLeft -1;
      this.setState({
        selectedKeg: kegToSell
      })
    }
  }
  handleStockClick = (id) => {
    let kegToStock = this.state.masterKegList.filter(
      keg => keg.id === id)[0];
      if(kegToStock.pintsLeft >= 120){
        alert("This Keg Is Full Boss")
      } else {
      kegToStock.pintsLeft = kegToStock.pintsLeft +1;
      this.setState({
        selectedKeg: kegToStock
      })
    }
  }
  viewKegList= () => {
    if(this.state.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else {
      this.setState({
        kegListVisible: true,
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
    } else if (this.state.editing === true){
      currentState = <EditKeg keg = {this.state.selectedKeg} onClickingEdit = {this.handleEditingKegInList} />
      buttonText = "return"
    } else if(this.state.selectedKeg != null) {
      currentState = <KegDetail keg = {this.state.selectedKeg} onClickingStock={this.handleStockClick} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText= "View Keg List"
    } else if(this.state.kegFormVisible){
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "View Keg List"
    } else if(this.state.kegListVisible){
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Customize a Keg"
    }

    return (
      <>
        {currentState}
        <Button className="btn" onClick={this.handleClick}>{buttonText}</Button>
        {/* <Button className="btn" onClick={this.viewKegList}>See Kegs</Button> */}
      </>
    )
  }
}

export default KegControl;