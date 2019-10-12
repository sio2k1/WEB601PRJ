import React, {Component} from 'react';
import './navigation.css';
import { Link, NavLink } from "react-router-dom";
import {connect} from 'react-redux'; 
import {a_logoff} from '../login/redux_login_actions'

class Navigation extends Component
{
  logoff = () => {this.props.dispatch(a_logoff())} //dispatching a logoff action
  
  loginMenuAdmin = () => {
    if (this.props.user_id!==-1) {
      return <li><NavLink to="/admin" activeClassName="navbar-active-link">Admin</NavLink></li> 
    }
  }

  loginMenuLogoff = () => { //show logoff button in menu
    if (this.props.user_id!==-1) {
      return <li><Link to="/" onClick={this.logoff}>Logoff</Link></li>
    }
  }

  loginUnlogged = () => { //show login button in menu, if we haven't login yet
    if (this.props.user_id===-1) {
      return <li><NavLink to="/login" activeClassName="navbar-active-link">Login</NavLink></li>
    }
  }

  articleList = () => {
    
  }

  render() {
    const user = this.props.user_name;
    return (
    <header className="header">
      {/* <div className="logo"></div> */}
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><NavLink exact to="/" activeClassName="navbar-active-link">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="navbar-active-link">About</NavLink></li>
        <li><NavLink to="/price" activeClassName="navbar-active-link">Price</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="navbar-active-link">Contacts</NavLink></li>
        {this.loginUnlogged() /*show login if you are un logged */}
        {this.loginMenuAdmin() /*show admin if you are logged */}
        {this.loginMenuLogoff() /*show logoff if you are logged */}
        <li className="username">{user}</li> {/*show user name if you are logged */}
      </ul> 
    </header>)
  }
}

function mapStateToProps(state) {
  return { 
    user_name: state.login_reducer.user_name ,
    user_id:  state.login_reducer.user_id
  }
}

export default connect(mapStateToProps)(Navigation)




