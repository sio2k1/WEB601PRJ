import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './login_layout.css';
import Login_box from './login_box'

const Login = () => {
    return (
        <div class="grid-wrapper">
            <div class="top-row">    
                    
            </div>
            <div class="header-row">    
                    <p class="fonts-big-title">Login text</p>
            </div>
            <div class="login-row">
                <Login_box />
            </div>
           

        </div>
      )
    }
export default Login;