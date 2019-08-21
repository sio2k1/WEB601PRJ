import React from 'react'
import TitleChanger from '../../functions/titlechanger'
import './about.css';
import about_data from '../../jsondata/about_content.json'
import json_parser from '../common/page_json_parser.js'


const TITLE = 'About Page'; 
const About = () => { 
  TitleChanger(TITLE);
  return (
    <div>
      {json_parser(about_data)}
    </div>
    )
  }
export default About;