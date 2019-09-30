import React, { Component } from 'react'
import Mailto from "react-protected-mailto";
//import MessengerCustomerChat from 'react-messenger-customer-chat';
import Linkify from 'react-linkify';
export default class BottomNavModal extends Component {
    render() {
        let email=  <Mailto
        email="edgar_desabille@yahoo.com"
        headers={
          ({ subject: "Question from the website" },
            { cc: "edgar_desabille@yahoo.com" })
        }
      />
      let call= <Mailto tel="+639166436942" />
      let website=<Linkify>emdwoodcarvingandfurniture.netlify.com/.</Linkify>
      
        const {textmessage}=this.props;
        let message;
  switch(textmessage){
      case 'email':
      message=email;
     
      break;
      case 'call':
      message=call;
       break;
       case 'website':
        message=website;
         break;
         
      default:
      message=`Please select icon below`;
  }
        return (
            <div>
               {message} 
            </div>
        )
    }
}
