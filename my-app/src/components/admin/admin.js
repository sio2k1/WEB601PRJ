import React from 'react'
import './admin.css';
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Admin Page'; //TitleChanger(TITLE);
//import about_data from '../../jsondata/about_content.json'
//import json_parser from '../common/page_json_parser.js'



const Admin = () => { 
  TitleChanger(TITLE);  
  return (
      <div className="admin-content-centerer">
        <div className="admin-wrapper-grid">
          <div className="admin-menu">menu</div>
          <div className="admin-content">content</div>
        </div>
      </div>
      )
    }
export default Admin;