import React, { Component } from 'react'
import myiamge from "../images/Devpict.jpg";
import '../App.css'
export default class Messagetext extends Component {
    render() {
             let mindtext = `Website developing is a tough choice to do in my case. Let me tell you some of my story. While I have been working somewhere in Malaysia a days ago for six years as Cnc Macinist,
        as I am undergradute in Bachelor of Science in Information Technology, I tried hard to do research in vb.net programming after my work everyday. A years later, I 
        built a simple All in one Business Desktop Application, unfortunately no one needed it in my village. After that I did learn React native and I built Shopping List in just a month for android application for fun
        eventually I have learned Reactjs and I built simple e-commerce website. So as long as I could understand how to computer execute the javascript code, I would push beyond limit to build an awesome website`;
        let vbnettext = `I developed All in One Business Application for desktop using vb.net. It covers daily time record of the employees and generates payroll for every employee. Anyway it is for convenient store. It accept product registration and automatically generates its barcodes.
        For product outgoing, it have P.O.S. included and it is capable for barcode reading. It automatically calculate the tax rate, discount rate. I used MSSQL for the database, doing sql query is a bit complex compared with nosql but I have managed to do it in my desktop application.
        We back to the product record it is automatically decreasing when P.O.S. pull it out. And eventualy its includes reporting. Sales reports, Payroll reports, Fast moving product reports, Expenses Reports and it could generates Income statement. I used double entry for accounting sytem for that.`;
        let reactnativetext = `React native is cool. When I developed a Shoppping List, I was amazed because there is a lot of an open source library that's easy to use. There is also an available documentation for certain library which is developer can grab. Anyway is an offline application. I used sqLite for my database and it very
        easy to use. It is a very usefull apps for someone whose buying volume quantity in a Convenient store. It calculates how much the cost of all items that youre going to buy
        And when you are in a store you only pick up the items which is in the list so that you can avoid extra expenses then before you bring your cart to the cashier your already knew how much you are going to pay. It also accept an expenses cost everyday so that you have a record for how much you have spent in a month.`;
        let reactjstext =`So here I am, my main subject. React Js is very cool, although I just learned it by reading many articles including searching an answer of some problem to Stackoverflow, Medium and Github, but I could say, it is very cool because I can easily manage the properties of the component, passing its props and setting its state.
        Doing some promise function with assync and await method, I can easily bring the result to the component in such an order of code execution. `;
        let programmingtext = `Programming is tough.It is not just about coding. It is about problem solving. There are many aspect of business that should be learned to the make the program succeed, although I am under-graduate of B.S.I.T., I have not been taught some business related subject but for I am a purely business minded, I can easily figure out how the business runs. Profit is the core purpose of business,
        so it is also my concern to make my project cost effective and deliver on time as promise.
        Just tell me some of your needs and I promise you that I give you more that neccessary to your business. It might be a limited idea but as I go through, I will search a related article and documentation and apply some analysis to help your business grow.`;
        let businesstext = `Business is composed with different elements. Accurate ideas is major element of the business, it should be on the right time, right place and right market. It requires feasibility study to asure that there is a positive result of the action taken and to figure out what is the perspective of such action.
        Evaluation of the financial investment is realy vital, how long it can sustain the operation expenses while the business is still introducing the product or service. I might have no enough knowledge of handling a business but using a very own skills is an asset of the business. I just share this understanding because I can apply it in website developing. `;
        let headertxt;
        const {textmessage}=this.props;
  let message;
  switch(textmessage){
      case 'mindset':
      message=mindtext
       headertxt='My Mind Set'
      break;
      case 'vbnet':
      message=vbnettext;
      headertxt='My Vb.net Experience'
      break;
      case 'reactnative':
      message=reactnativetext;
      headertxt='My React Native Experience'
      break;
      case 'reactjs':
      message=reactjstext;
      headertxt='My Reac Js Experience'
      break;
      case 'programming':
      message=programmingtext;
      headertxt='My Programming Capacity'
      break;
      case 'business':
      message=businesstext;
      headertxt='Understanding of Business'
      break;
      default:
      message=`Your partner in your business...The more project I could have, the
      more passionate I could be as a Web Developer`;
  }
        return (
            <div>
                <div >
          <img className="myImage" src={myiamge} alt="myimage" />
          <h3>{headertxt}</h3>
          <p1>
            {message}
          </p1>
        </div>  
            </div>
        )
    }
}
