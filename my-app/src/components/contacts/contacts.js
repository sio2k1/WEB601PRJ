import React from 'react'
import './contacts.css';
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Contacts Page'; //TitleChanger(TITLE);
const Contacts = () => { 
    TitleChanger(TITLE);
    return (
        <div className="article-content-centerer">
          
          <div className="article-content">
            <h2>Contacts</h2>
            <p>e-mail:contact@ecoferma.me</p>
            <p>tel.:+7 (111) 111-11-11</p>
          </div>
      </div>
      )
    }
export default Contacts;