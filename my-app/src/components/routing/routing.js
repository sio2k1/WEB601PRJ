import React from 'react';
//import ReactDOM from 'react-dom';
import {connect} from 'react-redux'; 
//import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import AppLayout from '../app_layout/app_layout'
import Login from '../login/login'
import Home from '../home/home'
import About from '../about/about'
import Admin from '../admin/admin'
import Price from '../price/price'
import Contacts from '../contacts/contacts'

import NotFound from '../defaultpage/404'
import Defaultpage from '../defaultpage/defaultpage'


//this is our routing container, it combines app layout and routes.

class Routing extends React.Component{
  
    login_routes = () => { // if we r logged add admin route
      if (this.props.user_id!==-1) {
        return (<Route path='/admin' component={Admin} />)
      }
    }
    
    render(){
      return (
        <div>
          <AppLayout />
          <Switch>
            {this.login_routes() /* additional routes if logged in */}
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Defaultpage>
              <Switch>
                <Route path='/about' component={About} />
                <Route path='/price' component={Price} />
                <Route path='/contacts' component={Contacts} />
                <Route component={NotFound} status={404} />
              </Switch>
            </Defaultpage> 
          </Switch>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return { user_id: state.login_reducer.user_id }
}
  
  
  
export default connect(mapStateToProps,)(Routing)
