import React from 'react';
import ReactDOM from 'react-dom';
import './app_layout.css';
import Navigation from '../menu/navigation'

const App_layout = ({ children }) => {
    return (
      <div>
        <Navigation />{children}
      </div>
    )
}
export default App_layout;