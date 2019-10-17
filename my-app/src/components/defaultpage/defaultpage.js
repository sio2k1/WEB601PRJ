/* 
We use this component to handle routes for pages with default layout (like /price and articles).
*/
import React from 'react'
import './defaultpage.css';
import { Route } from "react-router-dom";


const Defaultpage = ({ children }) => { // combine layout and child component (page content and footer)
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


    const DefaultLayoutRoute = ({component: Component, article, ...rest}) => {  // wrapper for layout for particular route, which transfer props to target component
      return (  
          <Route {...rest} render={matchProps => (  
          <Defaultpage>  
              <Component article={article} {...matchProps} />  
          </Defaultpage>  
          )} />  
      )  
      };  
  
  export default DefaultLayoutRoute;