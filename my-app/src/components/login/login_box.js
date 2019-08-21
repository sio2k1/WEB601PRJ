import React, {Component} from 'react';
import {connect} from 'react-redux'; 
//import {createStore} from '../../my_redux'
import './login_box.css';
import {a_login} from './redux_login_actions'
import { Redirect } from 'react-router-dom'

//class App extends Component
class Login_box extends Component {

    login;
    pwd;
    handleSubmit = (event) => {
        
        event.preventDefault();
        //const {dispatch} = this.props.store.dispatch;
        //this.props.on_a_login(login.value,pwd.value)
        this.props.dispatch(a_login(this.login.value,this.pwd.value));
    }
    renderRedirect = () => {
        if (this.props.user_id!==-1) {
          return <Redirect to='/' />
        }
      }
    displayWrongLoginPass = () => {
        if (this.props.wrong_login_pwd===true) {
          return <p class="login-wrong">Incorrect login/password</p>
        }
      }

    render() {
        return (
        <div class="login-box"> {this.renderRedirect() /*if we r logged redirect to home*/}
               
                <form onSubmit={this.handleSubmit}>
                    <label for="login">Login:</label>
                    <input class="login-txt-inp" type="text" id="login" name="login"  ref={node => this.login = node} placeholder="Enter login..."/>
                    <label for="pwd">Password:</label>
                    <input class="login-txt-inp" type="password" id="pwd" name="pwd" ref={node => this.pwd = node} placeholder="Enter password..."/>
                    {this.displayWrongLoginPass()}
                    <button class="login-btn" type="submit">Sing In</button>
                </form>
                
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return { user_id: state.login_reducer.user_id, wrong_login_pwd: state.login_reducer.wrong_login_pwd}
}
  
  
  
export default connect(mapStateToProps,)(Login_box)
