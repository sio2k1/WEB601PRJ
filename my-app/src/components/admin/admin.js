import React from 'react'
import './admin.css';
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Admin Page'; //TitleChanger(TITLE);


const Admin = () => {  
  TitleChanger(TITLE);  
  return (
      <div>admin one</div>
      )
    }
export default Admin;