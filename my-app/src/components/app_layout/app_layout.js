import React from 'react';
import './app_layout.css';
import Navigation from '../menu/navigation'

//This is application layout, we combine here navigation bar and a CHILD from router.
const AppLayout = ({ children }) => {
    return (
      <div>
        <Navigation />{children}
      </div>
    )
}
export default AppLayout;