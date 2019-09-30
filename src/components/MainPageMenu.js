import React, { Component } from "react";
//import mindset from '../images/Mindset.png'

import "../App.css";
import Messagetext from './Messagetext'
export default class MainPageMenu extends Component {
  state={
    messagetext:'',
  }
  handleClick=(message)=>{
  this.setState({messagetext:message})
  }
  render() 

  {
    return (
      <div className="MainMenuBackground">
      <div>
        <Messagetext textmessage={this.state.messagetext}/>
      </div>
        <div className="MainMenu">
          <div className="menuContentholder">
            <div className='mainMenuLabel'>
            <div className="menuContent" onClick={()=>{this.handleClick('mindset')}}>Click Me
             </div>
            <span>My Mind Set</span>
            </div>
            <div className='mainMenuLabel'>
            <div className="menuContent"onClick={()=>{this.handleClick('vbnet')}}>Click Me</div>
            <span>My Vb.net</span>
            </div>
            <div className='mainMenuLabel'>
            <div className="menuContent" onClick={()=>{this.handleClick('reactnative')}}>Click Me</div>
            <span>My React Native</span>
            </div>
         
          </div>
          <div className="menuContentholder">
          <div className='mainMenuLabel'>
          <div className="menuContent" onClick={()=>{this.handleClick('reactjs')}}>Click Me</div>
          <span>My React Js</span>
          </div>
          <div className='mainMenuLabel'>
          <div className="menuContent" onClick={()=>{this.handleClick('programming')}}>Click Me</div>
          <span>Programming Capacity</span>
          </div>
          <div className='mainMenuLabel'>
          <div className="menuContent" onClick={()=>{this.handleClick('portfolio')}}>Click Me</div>
          <span>Business Mind Set</span>
          </div>
         
          </div>
        </div>
      </div>
    );
  }
}
