import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from '../../my_redux'
import './basic.css';






const App_main = ({ children }) => {
    return (
      <div class="myapp">
        <div class ="app-main-grid">
            <div class="app-main-content-row">{children}</div>
            <div class="app-main-footer-row">
                <p class="fonts-footer">footertext_app</p>
            </div>
        </div>
      </div>
      
    )
}
export default App_main;