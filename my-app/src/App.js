import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from './my_redux'
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'

//import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'

import App_main from './components/basic/app_component'
import Login from './components/login/login'
import Home from './components/home/home'
import About from './components/about/about'
import Price from './components/price/price'
import Defaultpage from './components/defaultpage/defaultpage'
import comb_reducers from './components/reducers/index'


const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();




const store = createStore(comb_reducers);




class Navi extends React.Component{
  render(){

    //console.log();
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App_main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Defaultpage>
                <Route path='/about' component={About} />
                <Route path='/price' component={Price} />
              </Defaultpage>
            </Switch>
          </App_main>
      </BrowserRouter>
    </Provider>
    );
  }
}



ReactDOM.render(<Navi />,document.getElementById('root'))

//export default App;
export default Navi;