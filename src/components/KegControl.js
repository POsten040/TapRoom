import React from 'react';
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import KegDetail from './KegDetail';
import { Button } from 'reactstrap';
import { Animate } from 'react-simple-animate';
import nicebar from '../assets/nicebar.jpg';
import nicebar2 from '../assets/nicebar2.jpg';
import nicebar3 from '../assets/nicebar3.jpg';
import nicebar4 from '../assets/nicebar4.jpg';
import nicebar5 from '../assets/nicebar5.jpg';
import nicebar6 from '../assets/nicebar6.jpg';

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
      console.log(kegToSell.pintsLeft)
      if(kegToSell.pintsLeft <= 0){
        console.log("sold out")
        alert("All Sold Out Boss");
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
        alert("This Keg Is Full Boss");
      } else {
      kegToStock.pintsLeft = kegToStock.pintsLeft +1;
      this.setState({
        selectedKeg: kegToStock
      })
    }
  }
  randomNumber(){
    return Math.floor(Math.random() * 5);
  }
  
  render() {
    const yellowButton = {
      backgroundColor: "#33c4cc",
    }
    const blueButton = {
      backgroundColor: "#2ebad1",
    }
    const greyButton = {
      backgroundColor: '#79867f',
    }
    let backgroundImageArray = [
      {
        backgroundImage: `url(${nicebar})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar2})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar3})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar4})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar5})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar6})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    ]
    let backgroundImage = null;
    let buttonStyle = null;
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      
      currentState = <SplashPage buttonStyle={buttonStyle}/>
      buttonText = "Get Started";
      buttonStyle=yellowButton;
    } else if (this.state.editing === true){
      // console.log("FORM" + " : " + this.state.kegFormVisible);
      // console.log("List" + " : " + this.state.kegListVisible);
      // console.log("edit" + " : " + this.state.editing);
      // console.log("selected" + " : " + this.state.selectedKeg);
      currentState = <EditKeg keg = {this.state.selectedKeg} buttonStyle={buttonStyle} onClickingEdit = {this.handleEditingKegInList} />
      buttonText = "Go Back";
      buttonStyle= greyButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.selectedKeg != null) {
    
      
      currentState = <KegDetail keg = {this.state.selectedKeg}  onClickingStock={this.handleStockClick} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText= "View Keg List";
      buttonStyle=blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.kegFormVisible){
      
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList} buttonStyle={buttonStyle}/>
      buttonText = "View Keg List";
      buttonStyle=blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.kegListVisible){
      
      currentState = <KegList kegList={this.state.masterKegList}  onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Another Keg";
      buttonStyle = blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else {
      
      currentState = <KegList kegList={this.state.masterKegList}  onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Another Keg";
      buttonStyle = blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    }
    return (
      <>
      <div style={backgroundImage} >
        <div className="centered">
          {currentState}
          <Animate
              play={true}
              duration={1}
              delay={.1}
              start={{transform: 'translate(0,-200px)'}}
              end={{transform: 'translate(0, 0)'}}
              >
              <Button style={buttonStyle} className="btn" onClick={this.handleClick}>{buttonText}</Button>
          </Animate>
        </div>
      </div>
      </>
    )
  }
}

export default KegControl;