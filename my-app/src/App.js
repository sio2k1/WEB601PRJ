// application entry point
//we define react router root, history and redux store here
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Routing from './components/routing/routing';
import comb_reducers from './components/reducers/allReducers';

//define history
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const store = createStore(comb_reducers); // redux store creation


class AppRoot extends React.Component{ 
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Routing /> {/*insert routing component which combines basic layout and routes */}
        </BrowserRouter>
      </Provider>
    );
  }
}
export default AppRoot;