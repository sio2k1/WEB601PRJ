import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './about.css';
import about_data from '../../jsondata/about_content.json'


const About = () => {
    return (
      <div>
        <div class="text-box">
          <h1>{about_data.title}</h1>
          <p>{about_data.data}</p>
          </div> 
      </div>
      )
    }
export default About;