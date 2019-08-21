import React from 'react'
import TitleChanger from '../../functions/titlechanger'
import './home.css';
const TITLE = 'ecoferma.me'; //TitleChanger(TITLE);
const Home = () => { //Home page mostly done with css
  TitleChanger(TITLE);
  return (
    <div>
      <div className="home-grid">
        <div className="row-logo">
          <div className="logo-img">
          </div>
        </div>
      </div>
    </div>
    )
  }
export default Home;