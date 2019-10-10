import React from 'react'
import './admin_layout.css';
import TitleChanger from '../../functions/titlechanger'
import { Route, NavLink, Redirect } from "react-router-dom";
import {connect} from 'react-redux'; 

const TITLE = 'Admin Page'; //TitleChanger(TITLE);


const AdminLayout = ({children}) => {  
  TitleChanger(TITLE);  
  return (
      <div className="admin-content-bg">
        <div className="admin-content-centerer">
            <div className="admin-wrapper-grid">
            <div className="admin-menu">
            <ul>
                <li><NavLink exact to="/admin/pl-editor" >Price Editor</NavLink></li>
                <li><NavLink exact to="/admin/two" >Two</NavLink></li>
            </ul>
            </div>
            <div className="admin-content">{children}</div>
            </div>
        </div>
      </div>
      )
}


class AdminLayoutRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        if (this.props.user_id!==-1)
        {
            return (   
                <Route {...rest} render={matchProps => (    
                <AdminLayout>  
                    <Component {...matchProps} />  
                </AdminLayout>  
            )} />)
        } else
        {
            return (<Redirect to='/login' />)
        }
    }
}






function mapStateToProps(state) {
    return { user_id: state.login_reducer.user_id }
}
    
export default connect(mapStateToProps)(AdminLayoutRoute)

//export default AdminLayoutRoute;