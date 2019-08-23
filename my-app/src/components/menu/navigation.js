import React, {Component} from 'react';
import './navigation.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'; 
import {a_logoff} from '../login/redux_login_actions'

class Navigation extends Component
{
  logoff = () => {this.props.dispatch(a_logoff())} //dispatching a logoff action
  
  login_menu_admin = () => {
    if (this.props.user_id!==-1) {
      return <li><Link to="admin">Admin</Link></li> 
    }
  }

  login_menu_logoff = () => { //show logoff button in menu
    if (this.props.user_id!==-1) {
      return <li><Link to="/" onClick={this.logoff}>Logoff</Link></li>
    }
  }

  login_unlogged = () => { //show login button in menu, if we haven't login yet
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
       <li><Link to="contacts">Contacts</Link></li>
       {this.login_unlogged() /*show login if you are un logged */}
       {this.login_menu_admin() /*show admin if you are logged */}
       {this.login_menu_logoff() /*show logoff if you are logged */}
       <li className="username">{user}</li> {/*show user name if you are logged */}
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




