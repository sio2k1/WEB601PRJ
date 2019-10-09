import React from 'react'
import './defaultpage.css';
import { Route } from "react-router-dom";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Defaultpage = ({ children }) => {
    return (
      <div>
        <div className="default-page-grid">
          <article>
            <div className="default-page-content">
              {children}
            </div>
          </article>
          <footer>
            <div className="default-page-footer"></div>
          </footer>
        </div>
      </div>
      )
    }


    const DefaultLayoutRoute = ({component: Component, ...rest}) => {  
      return (  
          <Route {...rest} render={matchProps => (  
          <Defaultpage>  
              <Component {...matchProps} />  
          </Defaultpage>  
          )} />  
      )  
      };  
  
  export default DefaultLayoutRoute;
//export default Defaultpage;