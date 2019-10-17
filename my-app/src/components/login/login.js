/**login page component */
import React from 'react'
import './login_layout.css';
import LoginBox from './login_box'
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Login Page'; //TitleChanger(TITLE);

const Login = () => { // combine background and login box
    TitleChanger(TITLE);
    return (
        <div className="grid-wrapper">
            <div className="top-row"></div>
            <div className="header-row"></div>
            <div className="login-row">
                <LoginBox />
            </div>
        </div>
      )
    }
export default Login;

