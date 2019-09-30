import React, { Component } from 'react'
import myPict from '../images/Devpict.jpg'
import '../App.css'
import Mailto from "react-protected-mailto";
import moment from 'moment'
export default class MyProfile extends Component {
    render() {
        let age=moment().diff(moment("02/26/1978","MM/DD/YYYY"), 'years')
        let jobdes1=<li>To operate the Cnc Lathe machine in accordance with the process instructions and to provide production output in accordance with the required quality standard under minimum supervision.
        </li>
        let jobdes2=<li>To fully responsible for related machinery setting activities, cutting process, programming and sequence inspection of the parts produced.</li>
        let jobdes3=<li>To monitor, maintain and ensure that the machinery, tools, fixtures and inspection equipment are in good condition within the production area.
        To coach and guide machinist whose in the lowest level.</li>
       let jobdes4=<li>
       To coach and guide machinist whose in the lowest level.</li>
      let jobdes5=<li>To conduct machinery maintenance activities including oil level monitoring, coolant top-up, and chips disposal.</li>
      let jobdes6=<li>To ensure shop floor cleanliness at all times through proper daily housekeeping activities.</li>
      let jobdes7=<li> To assist in developing new process/programs/methods with  CAD/CAM programming tools.</li>
      let jobdes8=<li>To assist in production support by providing solutions related to manufacturing / machining processes and to achieve high productivity and quality require.
      To ensure that the Group's Quality System and Procedures are adhered to at all times.
      </li>
      let jobdes9=<li>
      To perform all other works as and when assigned
      To achieve and act on any other instructions from the Section Leader / Team Leader in production or any other person so delegated by him</li>
      let jobdes10=<li>To check/calculate dimension and tolerances using my knowledge in mathematics and instrument such as micrometer, calipers, bore guage, linear hieght, CMM. profile projector, etc.</li>
      return (
            <div className='profileCon'>
                <div className='profilePictContainer'>
                <img className='MyprofilePict' src={myPict} alt='mypict'/>
                <div className='profileDetailed1'>
                <div className='profileData1'>
                    <div><headr className='a'>Full name:</headr></div>
                    <div><headr className='a'>Address:</headr></div>
                    <div><headr className='a'>Contact Number:</headr></div>
                    <div><headr className='a'>Email:</headr></div>
                    <div><headr className='a'>Birthdate:</headr></div>
                    <div><headr className='a'>Age:</headr></div>
                </div>

                 <div className='profileData1'>
                    <div><headr className='b'>Edgar M. Desabille</headr></div>
                    <div><headr className='b'>Apgahn Patnongon Antique (Philippines)</headr></div>
                 
                    <div><headr className='b'>   <Mailto tel="+639166436942" /></headr></div>
                    <div><headr className='b'> 
            <Mailto
              email="edgar_desabille@yahoo.com"
              headers={
                ({ subject: "Question from the website" },
                  { cc: "edgar_desabille@yahoo.com" })
              }
            /></headr></div>
             <div><headr className='b'>October 6, 1977</headr></div>
             <div><headr className='b'>{age}</headr></div>
                </div>
                </div>
              
          
           
                </div>
                <div className='profileDetailed'>
                <headr className='c'>Bachelor of Science in Information Technology</headr>
                
                </div>
                <div className='profileDetailed'>
                <div className='profileData'>
                    <div><headr className='d'>School:</headr></div>
                    <div><headr className='e'>Univerity of Cebu (Philippines)</headr></div>
                    <div><headr className='d'>Address:</headr></div>
                    <div><headr className='e'>Sanciangko St. Cebu City (Philippines):</headr></div>
                    <div><headr className='d'>School Year:</headr></div>
                    <div><headr className='e'>1999-2003</headr></div>
                    <div><headr className='d'>Remark:</headr></div>
                    <div><headr className='e'>under-gradute</headr></div>
                    <div><headr className='d'>Reason:</headr></div>
                    <div><headr className='e'>Financial incapabilities</headr></div>
                       <div><headr className='d'>Working experiences:</headr></div>
                    <div><headr className='f'>August 2013-August 2019</headr></div>
                    <div><headr className='d'>Company:</headr></div>
                    <div><headr className='f'>Upeca Engineering</headr></div>
                    <div><headr className='d'>Position:</headr></div>
                    <div><headr className='f'>CNC Machinist and Programmer</headr></div>
                    <div><headr className='d'>Job Description:</headr></div>
                    <div>{jobdes1}</div>
                    <div>{jobdes2}</div>
                    <div>{jobdes3}</div>
                    <div>{jobdes4}</div>
                    <div>{jobdes5}</div>
                    <div>{jobdes6}</div>
                    <div>{jobdes7}</div>
                    <div>{jobdes8}</div>
                    <div>{jobdes9}</div>
                    <div>{jobdes10}</div>
                    <div><headr className='d'>Certifications:</headr></div>
                    <div><headr className='d'>AutoCad</headr></div>
                    <div><headr className='e'>Taken on:</headr></div>
                    <div><headr className='f'>July 27, 2013</headr></div>
                    <div><headr className='d'>Cnc Machining and Programming</headr></div>
                    <div><headr className='e'>Taken on:</headr></div>
                    <div><headr className='f'>Febuary 19, 2010</headr></div>
                </div>

                
                </div>
            
            </div>
        )
    }
}
