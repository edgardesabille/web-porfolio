import React, { Component } from 'react'
import webdesign from '../images/webdesign.jpg';
import ecommerce from '../images/ecommerce.jpg';
import fullstact from '../images/headerimage.jpg'
import pricingimage from '../images/pricing.jpg'
import Mailto from "react-protected-mailto";
export default class Portfolio extends Component {
    render() {
        let webdesigntext=`I design your web that fits in desktop and mobile device so that it is still organize whatever device is using in viewing your website.
        Making it awesome is also an atraction to your business audiences.`
        let ecomerce=`I can bring your product online like an actual store so that your customer dont need to go to your store to buy your product because they can view all poduct online.
         To control the coverage area of your delivery, I handle customer registration to your website and sets a certain state or province that only allowed for delivery. I will keep thier records
         to trace any fool order or price canvasing`;
        let fullStack=`I can handle any kind of online system. Inventory system, Online P.O.S. for different types of businesses. Payroll system including Time in and Time out of the employees. Every System that you wish me to do has reporting at the end, it depends on you what it would be
        I will handle backend security to make your data safe from any attack`;
        let aboutpricing=`On pricing,it depends on how large is the data to be kept and how the UI is displayed. Dont worry, I only take less for the labor cost as I am new for full stack developing, the importance is the cost of backend hosting, try now! Just email me for what type of website do you like me to build`;
       let email= <Mailto
       email="edgar_desabille@yahoo.com"
       headers={
         ({ subject: "Question from the website" },
           { cc: "edgar_desabille@yahoo.com" })
       }
     />
        return (
            <div className='portfolioCon'>
                <div className='portfolioContent'>
<img className='portfolioImage' src={webdesign} alt='webdesign'/>
<h4>Responsive Layout</h4>
<p2>{webdesigntext}</p2>
                </div>
                <div className='portfolioContent'>
<img className='portfolioImage' src={ecommerce} alt='ecommerce'/>
<h4>E-commerce</h4>
<p2>{ecomerce}</p2>
                </div>
                <div className='portfolioContent'>
<img className='portfolioImage' src={fullstact} alt='fullstack'/>
<h4>Full Stack Website</h4>
<p2>{fullStack}</p2>
</div>
<div className='portfolioContent'>
<img className='portfolioImage' src={pricingimage} alt='pricingimage'/>
<h4>About Pricing</h4>
<p2>{aboutpricing}</p2>
<p2>Email: {email}</p2>
                </div>
            </div>
        )
    }
}
