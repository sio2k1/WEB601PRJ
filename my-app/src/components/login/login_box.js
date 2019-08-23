import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import './login_box.css';
import {a_login} from './redux_login_actions'
import { Redirect } from 'react-router-dom'

class Login_box extends Component {

    login;
    pwd;
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(a_login(this.login.value,this.pwd.value));
    }
    renderRedirect = () => {
        if (this.props.user_id!==-1) {
          return <Redirect to='/' />
        }
      }
    displayWrongLoginPass = () => {
        if (this.props.wrong_login_pwd===true) {
          return <div className="login-wrong">Incorrect login/password</div>
        }
      }
    componentDidMount(){
      this.login.focus(); // ser cursor to username/login input on loaded
    }

    render() {
        return (
        <div className="login-box"> {this.renderRedirect()} {/*if we r logged redirect to home*/} 
          <form onSubmit={this.handleSubmit}>
              <label for="login">
                <div className="login-label-wrapper">
                <div>Login:</div>
                <div>{this.displayWrongLoginPass()}</div>  
              </div>
              </label>
              <input className="login-txt-inp" type="text" id="login" name="login"  ref={node => this.login = node} placeholder="Enter login..."/>
              <label className for="pwd">Password:</label>
              <input className="login-txt-inp" type="password" id="pwd" name="pwd" ref={node => this.pwd = node} placeholder="Enter password..."/>
              
              <button className="login-btn" type="submit">Sing In</button>
          </form>
        </div>
        )
    }
    
}

function mapStateToProps(state) {
  return { user_id: state.login_reducer.user_id, wrong_login_pwd: state.login_reducer.wrong_login_pwd}
}
  
export default connect(mapStateToProps,)(Login_box)
