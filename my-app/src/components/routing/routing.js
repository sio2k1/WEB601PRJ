import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'; 
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import App_main from '../basic/app_component'
import Login from '../login/login'
import Home from '../home/home'
import About from '../about/about'
import Admin from '../admin/admin'
import Price from '../price/price'
import NotFound from '../defaultpage/404'
import Defaultpage from '../defaultpage/defaultpage'


class Routing extends React.Component{
  
    login_routes = () => { // if we r logged add admin route
      if (this.props.user_id!==-1) {
        return (<Route path='/admin' component={Admin} />)
      }
    }
    
    render(){
  
      //console.log();
      return (
            <App_main>
              <Switch>
                {this.login_routes()}
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Defaultpage>
                  <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/price' component={Price} />
                    <Route component={NotFound} status={404} />
                  </Switch>
                </Defaultpage> 
              </Switch>
            </App_main>
      );
    }
  }

  function mapStateToProps(state) {
    return { user_id: state.login_reducer.user_id }
}
  
  
  
export default connect(mapStateToProps,)(Routing)
