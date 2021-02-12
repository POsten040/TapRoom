import React from 'react';
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import KegDetail from './KegDetail';
import { Button } from 'reactstrap';

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
    } else if(this.state.kegListVisible && this.state.selectedKeg === null){
      this.viewKegList();
    } else if (this.state.selectedKeg != null){
      this.setState({
        kegListVisible: true,
        kegFormVisible: false,
        selectedKeg:null
      })
    }
  }
  viewKegList= () => {
    if(this.state.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else {
      this.setState({
        kegListVisible: false,
        kegFormVisible: true,
        selectedKeg: null
      })
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    // const newMasterKegList = [...this.state.masterKegList, newKeg];
    this.setState({
      masterKegList: newMasterKegList, 
      kegFormVisible: false,
      kegListVisible: true
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
  render() {
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      currentState = <SplashPage />
      buttonText = "Get Started"
    } else if (this.state.editing === true){
      console.log("master list" + ": " + this.state.masterKegList)
      console.log("keg form visible" + ": " + this.state.kegFormVisible)
      console.log("Keg list visible" + ": " + this.state.kegListVisible)
      console.log("editing" + ": " + this.state.editing)
      console.log("selected Keg" + ": " + this.state.selectedKeg)
      currentState = <EditKeg keg = {this.state.selectedKeg} onClickingEdit = {this.handleEditingKegInList} />
      buttonText = "return"
    } else if(this.state.selectedKeg != null) {
      console.log("master list" + ": " + this.state.masterKegList)
  console.log("keg form visible" + ": " + this.state.kegFormVisible)
  console.log("Keg list visible" + ": " + this.state.kegListVisible)
  console.log("editing" + ": " + this.state.editing)
  console.log("selected Keg" + ": " + this.state.selectedKeg)
      currentState = <KegDetail keg = {this.state.selectedKeg} onClickingStock={this.handleStockClick} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText= "View Keg List"
    } else if(this.state.kegFormVisible){
      console.log("master list" + ": " + this.state.masterKegList)
  console.log("keg form visible" + ": " + this.state.kegFormVisible)
  console.log("Keg list visible" + ": " + this.state.kegListVisible)
  console.log("editing" + ": " + this.state.editing)
  console.log("selected Keg" + ": " + this.state.selectedKeg)
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "View Keg List"
    } else if(this.state.kegListVisible){
      console.log("master list" + ": " + this.state.masterKegList)
  console.log("keg form visible" + ": " + this.state.kegFormVisible)
  console.log("Keg list visible" + ": " + this.state.kegListVisible)
  console.log("editing" + ": " + this.state.editing)
  console.log("selected Keg" + ": " + this.state.selectedKeg)
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Customize a Keg"
    } else {
      console.log("master list" + ": " + this.state.masterKegList)
  console.log("keg form visible" + ": " + this.state.kegFormVisible)
  console.log("Keg list visible" + ": " + this.state.kegListVisible)
  console.log("editing" + ": " + this.state.editing)
  console.log("selected Keg" + ": " + this.state.selectedKeg)
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