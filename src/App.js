import React, { Component } from "react";
import TopNavigation from './layouts/TopNavigation';

//import SimpleBottomNavigation from "./components/BottomNav";
//import myimage from "../src/images/Devpict.jpg";
import Frontpage from './components/Frontpage';
import { HashRouter, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import MyProfile from "./components/MyProfile";
//import MainPageMenus from "./components/MainPageMenu";
import Allexplained from "./Allexplained";
//import ResponsiveDrawer from './components/ResponisveMenu'
//import MessengerCustomerChat from 'react-messenger-customer-chat';
//import ChatIcon from '@material-ui/icons/Chat';
//import PhoneIcon from '@material-ui/icons/Phone';
//import EmailIcon from '@material-ui/icons/Email';
//import LanguageIcon from '@material-ui/icons/Language';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import BottomNavModal from './components/BottomNavModal'

import Portfolio from './components/Portfolio'
export default class App extends Component {
  
 
  render() {
   
    return (
      <div className="mainPage">
 <div className="navigationCon">
          <TopNavigation />
        </div>
    
      
       

        <HashRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Frontpage} />
              <Route exact path="/MyProfile/" component={MyProfile} />
              <Route exact path="/Porfolio/" component={Portfolio} />
              <Route exact path='/Mystory/' component={Allexplained} />
            </Switch>
          </div>
        </HashRouter>
      
 
       
      </div>
    );
  }
}
