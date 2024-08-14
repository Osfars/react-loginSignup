import React, { useState } from 'react'
import './LoginSignup.css'
import axios from "axios"

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] =useState("");
    const [passwrd, setPasswrd] = useState("");

    const handleUsernameChange = (value) => {
        setUsername(value);
      };
    const handlePasswordChange = (value) => {
        setPasswrd(value);
      };

      const handleLogin = () => {
        const data = {
          Username: username,
          Password: passwrd
        };
        const url = "https://localhost:44346/aip/test/login";
    
        if(data.Username === null || data.Username === '' || data.Password === null || data.Password === '')
        {
            alert('fill all the details');
            return;
        }
    
        axios
          .post(url, data)
          .then((result) => {
            if (result.data === "User is valid") 
                alert("successfully login");
            else {
              alert(result.data);
            }
          })
          .catch((error) => {
            alert(error);
          });
      };

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? <div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='name' />
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='email'onChange={(e) => handleUsernameChange(e.target.value)}/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='password' onChange={(e) => handlePasswordChange(e.target.value)}/>
            </div>
            {action === "Login" ? <div></div> : <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='confirm password'/>
            </div>}
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click here</span></div>}
        
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
        </div>
        <div className="forgot-password">
            <div className="farright">
                <span>
                    {action === "Login" ? "Sign Up": action === "Sign Up" ? "Login":""}
                    </span> onClick={() =>{setAction("Login")}}
             </div>
        </div>
    </div>
  )
}
export default LoginSignup