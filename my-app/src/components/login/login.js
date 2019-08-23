import React from 'react'
import './login_layout.css';
import Login_box from './login_box'
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Contacts Page'; //TitleChanger(TITLE);

const Login = () => {
    TitleChanger(TITLE);
    return (
        <div className="grid-wrapper">
            <div className="top-row"></div>
            <div className="header-row">    
                <p className="fonts-big-title"></p>
            </div>
            <div className="login-row">
                <Login_box />
            </div>
        </div>
      )
    }
export default Login;

