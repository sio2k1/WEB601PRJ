/* 
We use this container to handle routes for authentication and display admin-panel layout for pages.
*/
import React from 'react'
import './admin_layout.css';
import TitleChanger from '../../functions/titlechanger'
import { Route, NavLink, Redirect } from "react-router-dom";
import {connect} from 'react-redux'; 

const TITLE = 'Admin Page'; //TitleChanger(TITLE);

const AdminLayout = ({children}) => {  // layout statless component combining menu and {children}
  TitleChanger(TITLE);  
  return (
      <div className="admin-content-bg">
        <div className="admin-content-centerer">
            <div className="admin-wrapper-grid">
            <div className="admin-menu">
            <ul>
                <li><NavLink exact to="/admin/pl-editor" >Price Editor</NavLink></li>
                <li><NavLink exact to="/admin/user-editor" >User Editor</NavLink></li>
            </ul>
            </div>
                <div className="admin-content">{children}</div>
            </div>
        </div>
      </div>
      )
}


class AdminLayoutRoute extends React.Component { // user defined react router route component, which allows to have different layout to admin panel pages
    render() {
        const { component: Component, ...rest } = this.props; // get component and rest props
        if (this.props.user_id!==-1) // check if user is logged in
        {
            return (   
                <Route {...rest} render={matchProps => (    
                <AdminLayout>  
                    <Component {...matchProps} />  
                </AdminLayout>  
            )} />)
        } else // if not logged in -> redirect to login page
        {
            return (<Redirect to='/login' />)
        }
    }
}

function mapStateToProps(state) { // redux subscription
    return { user_id: state.login_reducer.user_id }
}
    
export default connect(mapStateToProps)(AdminLayoutRoute) // container creating

//export default AdminLayoutRoute;