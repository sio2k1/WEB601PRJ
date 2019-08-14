import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './defaultpage.css';
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Defaultpage = ({ children }) => {
    return (
      <div>
        <div class="default-page-grid">
          <div class="default-page-content">
            {children}
          </div>
          <div class="default-page-footer"></div>
        </div>
      </div>
      )
    }
export default Defaultpage;