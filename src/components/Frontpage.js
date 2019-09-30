import React, { Component } from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import BottomNavModal from '../components/BottomNavModal'
import myPict from "../../src/images/Devpict.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import BottomNavModal from '../components/BottomNavModal'
//import frontPict from "../../src/images/Coverpage.jpg";
//import coverPict from "../../src/images/background.jpg";
export default class Frontpage extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
    modalTitle:'',
      modal: false,
      messagetext:'',
    };
 
    this.toggle1 = this.toggle1.bind(this);
  }
 
  toggle1() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleClick=(message,title)=>{
    this.toggle1()
    this.setState({
      messagetext:message,
      modalTitle:title,
    })
    }
  render() {
    let reactjstext = `Hi, `;
    let reactjstext1 = `I'm Edgar M. Desabille`;
    let reactjstext2 = `I am available`;
    let reactjstext3 = `Try me...`;
    return (
      <div className="mainPagefront">
          <Modal isOpen={this.state.modal} toggle={this.toggle1} className={this.props.className}>
          <ModalHeader toggle={this.toggle1}>{this.state.modalTitle}</ModalHeader>
          <ModalBody>
          <BottomNavModal textmessage={this.state.messagetext}/>
          </ModalBody>
          <ModalFooter>
         
            <Button color="secondary" onClick={this.toggle1}>Close</Button>
          </ModalFooter>
        </Modal>
        <div className="coverPage1">
          <div className="rectangle1">
            <img className="myImage " src={myPict} alt="" />
            <p4>{reactjstext}</p4>
            <p4>{reactjstext1}</p4>
            <p4>{reactjstext2}</p4>
            <p4>{reactjstext3}</p4>
          </div>
        </div>
        <div className="coverPage">
          <div className="rectangle">
            <div className="rectangleCircle">1</div>
            Newbie
            <div className="rectangleCircle1"></div>
          </div>
          <div className="rectangle">
            React Js
            <div className="rectangleCircle">2</div>
            <div className="rectangleCircle1"></div>
          </div>

          <div className="rectangle">
           React Native
            <div className="rectangleCircle">3</div>
            <div className="rectangleCircle1"></div>
          </div>
          <div className="rectangle">
            Cloud Firestore
            <div className="rectangleCircle">4</div>
            <div className="rectangleCircle1"></div>
          </div>
          <div className="rectangle">
            Redux
            <div className="rectangleCircle">5</div>
            <div className="rectangleCircle1"></div>
          </div>
        </div>
        <div className='bottomNav'>
          <div className='bottomNavContent' onClick={()=>{this.handleClick('website','Visit my sample website')}}>
          <LanguageIcon/>
         <h1 className='bottomNavlabel'>Project</h1>
          </div>
         
          <div className='bottomNavContent' onClick={()=>{this.handleClick('email','I am happy to serve you mam/sir')}}>
         <EmailIcon/>
         <h1 className='bottomNavlabel'>Email</h1>
          </div>
          <div className='bottomNavContent' onClick={()=>{this.handleClick('call','I will be glad to have your call mam/sir')}}>
            <PhoneIcon/>
        
         <h1 className='bottomNavlabel'>Call me</h1>
          </div>
        </div>
      </div>
    );
  }
}
