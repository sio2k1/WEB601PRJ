import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from '../../my_redux'
import './navigation.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'; 


class Navigation extends Component
{

  render() {
    
    const user = this.props.user_name;
    return (
    <nav class="navbar">
    <ul>

      
       <li><Link to="/">{user}Home</Link></li>
       <li><Link to="about">About</Link></li>
       <li><Link to="price">Price</Link></li>
       <li><Link to="login">Login</Link></li>
    </ul>
    </nav>)
  }
}

/*
const Navigation = (props,{ children }) => {
  state = {
    "auth": {"user_id":-1, "user_name":""}
  }  
  return (
      <nav class="navbar">
      <ul>

        
         <li><Link to="/">{props.auth}Home</Link></li>
         <li><Link to="about">About</Link></li>
         <li><Link to="price">Price</Link></li>
         <li><Link to="login">Login</Link></li>
      </ul>
      </nav>
    )
}*/

function mapStateToProps(state) {
  return { user_name: state.login_reducer.user_name }
}



export default connect(mapStateToProps)(Navigation)

//export default Navigation;



