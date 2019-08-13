import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from '../../my_redux'
import './basic.css';
import Navigation from '../menu/navigation'






const App_main = ({ children }) => {
    return (
      <div class="myapp"><Navigation />{children}
         {/* <div class ="app-main-grid">
          <div class="app-main-menu-row"><Navigation /></div>
          <div class="app-main-content-row"></div>
        </div>  */}
      </div>
      
    )
}
export default App_main;