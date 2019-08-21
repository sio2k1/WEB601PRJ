import React from 'react'
import './admin.css';
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Admin Page'; //TitleChanger(TITLE);
//import about_data from '../../jsondata/about_content.json'
//import json_parser from '../common/page_json_parser.js'



const Admin = () => { 
  TitleChanger(TITLE);  
  return (
      <div>
        <p>admin page</p>
      </div>
      )
    }
export default Admin;