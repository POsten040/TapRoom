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
  hideSplashPage = () => {
    this.setState({
      splashPageVisible: false,
      kegFormVisible: true,
      selectedKeg: null,
      editing: false
    });
  }
  hideKegForm = ()=>{
    if(this.state.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else{
      this.setState(({
        kegFormVisible: false,
        kegListVisible: true
      }));
    }
  }
  toggleEditing = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }))
  }
  showKegList = () => {
    this.setState({
      kegListVisible: true,
      kegFormVisible: false,
      selectedKeg:null
    })
  }
  handleClick = () => {
    if(this.state.splashPageVisible){
      this.hideSplashPage();
    } else if(this.state.kegFormVisible){
      this.hideKegForm();
    } else if(this.state.editing){
      this.toggleEditing();
    } else if(this.state.kegListVisible && this.state.selectedKeg === null){
      this.viewKegList();
    } else if (this.state.selectedKeg != null){
      this.showKegList();
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
    const yellowButton = {
      backgroundColor: "#33c4cc",
    }
    const blueButton = {
      backgroundColor: "#88b035",
    }
    let buttonStyle = null
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      
      currentState = <SplashPage />
      buttonText = "Get Started"
    } else if (this.state.editing === true){
      // console.log("FORM" + " : " + this.state.kegFormVisible);
      // console.log("List" + " : " + this.state.kegListVisible);
      // console.log("edit" + " : " + this.state.editing);
      // console.log("selected" + " : " + this.state.selectedKeg);
      currentState = <EditKeg keg = {this.state.selectedKeg} onClickingEdit = {this.handleEditingKegInList} />
      buttonText = "Go Back"
    } else if(this.state.selectedKeg != null) {
    
      
      currentState = <KegDetail keg = {this.state.selectedKeg} onClickingStock={this.handleStockClick} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText= "View Keg List";
    } else if(this.state.kegFormVisible){
      
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList} buttonStyle={yellowButton}/>
      buttonText = "View Keg List";
      buttonStyle=yellowButton;
    } else if(this.state.kegListVisible){
      
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Customize a Keg";
      buttonStyle = blueButton;
    } else {
      
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Customize a Keg";
      buttonStyle = blueButton;
    }

    return (
      <>
        {currentState}
        <Button style={buttonStyle} className="btn" onClick={this.handleClick}>{buttonText}</Button>
        {/* <Button className="btn" onClick={this.viewKegList}>See Kegs</Button> */}
      </>
    )
  }
}

export default KegControl;