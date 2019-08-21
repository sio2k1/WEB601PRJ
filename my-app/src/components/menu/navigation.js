import React, {Component} from 'react';
import './navigation.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'; 
import {a_logoff} from '../login/redux_login_actions'

class Navigation extends Component
{
  logoff = () => {this.props.dispatch(a_logoff())}
  
  login_menu_admin = () => {
    if (this.props.user_id!==-1) {
      return <li><Link to="admin">Admin</Link></li> 
    }
  }

  login_menu_logoff = () => {
    if (this.props.user_id!==-1) {
      return <li><Link to="/" onClick={this.logoff}>Logoff</Link></li>
    }
  }

  login_unlogged = () => {
    if (this.props.user_id===-1) {
      return <li><Link to="login">Login</Link></li>
    }
  }

  render() {
    
    const user = this.props.user_name;
    return (
    <nav className="navbar">
    <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="about">About</Link></li>
       <li><Link to="price">Price</Link></li>
       {this.login_unlogged()}
       {this.login_menu_admin()}
       {this.login_menu_logoff()}
       <li className="username">{user}</li>
    </ul>
    </nav>)
  }
}

function mapStateToProps(state) {
  return { 
    user_name: state.login_reducer.user_name ,
    user_id:  state.login_reducer.user_id
  }
}

export default connect(mapStateToProps)(Navigation)




