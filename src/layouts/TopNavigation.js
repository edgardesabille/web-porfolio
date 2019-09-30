import React from 'react';
import Messagetext from '../components/Messagetext'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

   
    this.state = {
      isOpen: false,
      modal: false,
      messagetext:'',
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggle1() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleClick=(message)=>{
    this.toggle1()
    this.setState({messagetext:message})
    }
  render() {
    return (
      <div >
 <Modal isOpen={this.state.modal} toggle={this.toggle1} className={this.props.className}>
          <ModalHeader toggle={this.toggle1}><h3 className='logoText'>EMD</h3></ModalHeader>
          <ModalBody>
          <Messagetext textmessage={this.state.messagetext}/>
          </ModalBody>
          <ModalFooter>
         
            <Button color="secondary" onClick={this.toggle1}>Close</Button>
          </ModalFooter>
        </Modal>

        <Navbar  light expand="md" className='topNav'>
          <NavbarBrand href="/"><h3 className='logoText'>EMD</h3></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className='nav' href="/MyProfile/" ><p  className='nav'>My Profile</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Porfolio/"><p  className='nav'>My Portfolio</p></NavLink>
              </NavItem>
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <p  className='nav'>My Story</p> 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={()=>{this.handleClick('mindset')}}>
                    My Mind Set
                  </DropdownItem>
                  <DropdownItem onClick={()=>{this.handleClick('vbnet')}}>
                   My Vb.net Experience
                  </DropdownItem>
                  <DropdownItem  onClick={()=>{this.handleClick('reactnative')}}>
                   My React Native Experience
                  </DropdownItem>
                  <DropdownItem onClick={()=>{this.handleClick('reactjs')}}>
                   My React Js Experience
                  </DropdownItem>
                  <DropdownItem onClick={()=>{this.handleClick('programming')}}>
                  My Programming Capacity
                  </DropdownItem>
                  <DropdownItem onClick={()=>{this.handleClick('business')}}>
                 Understanding of Business
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href='/Mystory/'>
                 View All
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}