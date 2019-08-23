import React from 'react';
import './app_layout.css';
import Navigation from '../menu/navigation'

//This is application layout, we combine here navigation bar and a CHILD from router.
const App_layout = ({ children }) => {
    return (
      <div>
        <Navigation />{children}
      </div>
    )
}
export default App_layout;