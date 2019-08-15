import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './defaultpage.css';
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Defaultpage = ({ children }) => {
    return (
      <div>
        <div class="default-page-grid">
          <article>
            <div class="default-page-content">
              {children}
            </div>
          </article>
          <footer>
            <div class="default-page-footer"></div>
          </footer>
        </div>
      </div>
      )
    }
export default Defaultpage;