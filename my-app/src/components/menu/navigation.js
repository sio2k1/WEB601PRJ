import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from '../../my_redux'
import './navigation.css';
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link } from "react-router-dom";

const Navigation = ({ children }) => {
    return (
      <nav class="navbar">
      <ul>
        {/* <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="login">Login</a></li> */}
        
         <li><Link to="/">Home</Link></li>
         <li><Link to="about">About</Link></li>
         <li><Link to="price">Price</Link></li>
         <li><Link to="login">Login</Link></li>
      </ul>
      </nav>
    )
}
export default Navigation;



{/* <nav class="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="login">Login</a></li>
          </ul>
        </nav>
    <section id="home">
      <h1>Welcome To My Site</h1>
      <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
    </section> */}