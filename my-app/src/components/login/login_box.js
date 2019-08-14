import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './login_box.css';

const Login_box = () => {
    return (
        <div class="login-box">
            <form action="/">
                <label for="login">Login</label>
                <input type="text" id="login" name="login" placeholder="Enter login..."/>
                <label for="pwd">Password</label>
                <input type="text" id="pwd" name="pwd" placeholder="Enter password..."/>
                <input type="submit" value="Submit"/>
            </form>
           
        </div>
      )
    }
export default Login_box;


