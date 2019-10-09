import React from 'react';
import {connect} from 'react-redux'; 
import {Route, Switch} from 'react-router-dom'
import AppLayout from '../app_layout/app_layout'
import Login from '../login/login'
import Home from '../home/home'
import About from '../about/about'
import Admin from '../admin/admin'
import Price from '../price/price'
import Contacts from '../contacts/contacts'
import AdminLayoutRoute from '../admin/admin_layout'

import NotFound from '../defaultpage/404'
import DefaultLayoutRoute from '../defaultpage/defaultpage'


//this is our routing container, it combines app layout and routes.

class Routing extends React.Component{
  
    login_routes = () => { // if we r logged add admin route
      if (this.props.user_id!==-1) {
        return (
        <nn>
        
            
                <AdminLayoutRoute path='/admin' component={Admin} />
                <AdminLayoutRoute path='/admin4' component={Admin} />
                </nn>     
        
        )
      }
    }
    //{this.login_routes() /* additional routes if logged in */}
    render(){
      return (
        <div>
          <AppLayout>
            <Switch>
              
              <AdminLayoutRoute path='/admin' component={Admin} />
              <AdminLayoutRoute path='/admin/one' component={Admin} />
              <AdminLayoutRoute path='/admin/two' component={Admin} />
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
             
              
                  <DefaultLayoutRoute path='/about' component={About} />
                  <DefaultLayoutRoute path='/price' component={Price} />
                  <DefaultLayoutRoute path='/contacts' component={Contacts} />
                  <DefaultLayoutRoute component={NotFound} status={404} />
               
             
             
            </Switch>
           
          </AppLayout>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return { user_id: state.login_reducer.user_id }
}
  
  
  
export default connect(mapStateToProps)(Routing)
