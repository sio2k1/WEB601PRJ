import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './home.css';
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Home = () => {
    return (
      <div>
        <div class="home-grid">
          <div class="row-logo"><section id="home"></section></div>
          <div class="row-article"><section id="about">SOME TEXT About<hr/>SOME TEXT About<hr/>SOME TEXT About<hr/>SOME TEXT About<hr/></section></div>
        </div>
      </div>
      )
    }
export default Home;