

import React from 'react'
import '../components/Login.css'
import userpic from '../images/user.png'
import mail from '../images/mail.png'
import pwd from '../images/pwd.png'
import fullname from '../images/fullname.png'
function Login() {
  return (  
    
      
     <div className="main">
       <div className="sub-main">
         <div>
           <div className="image">
             <div className="contain">
             <img src={userpic} alt="userpic" className="userpic"/>
             </div>

           </div>
           <div>
            <h1>Contact Us</h1>
            <div>
              <img src={userpic} className="mail"/>
              <input type="text" placeholder='Name' className="name"/>
            </div>
            <div className='gap'>
              <img src={mail} className="pwd"/>
              <input type="text" placeholder='E-mail' className="name"/>
            </div>
            <div className='gap'>
              
              <input type="text" placeholder='Brief Description' className="long"/>
            </div>
            <button className='click'>Send</button>
           </div>
         </div>
       </div>
     </div>
    
  )
}

export default Login

