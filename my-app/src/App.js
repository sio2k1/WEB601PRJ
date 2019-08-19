import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import Routing from './components/routing/routing'
import comb_reducers from './components/reducers/index'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const store = createStore(comb_reducers);


class AppRoot extends React.Component{ 
  render(){

    //console.log();
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Routing />
        </BrowserRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<AppRoot />,document.getElementById('root'))
export default AppRoot;