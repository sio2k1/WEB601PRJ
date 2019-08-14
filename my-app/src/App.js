import React from 'react';
import ReactDOM from 'react-dom';
//import {createStore} from './my_redux'
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore } from 'redux'
import {Provider} from 'react-redux'

import App_main from './components/basic/app_component'
import Login from './components/login/login'
import Home from './components/home/home'
import About from './components/about/about'
import Defaultpage from './components/defaultpage/defaultpage'
const history = createBrowserHistory();



let initialState = {aaa:0};
let storage_operator = (state=initialState, action) => {

  if (action.type==='INC')
  {
      return {test: state.test+1};
  } else 
  {
      return state;
  }
}

let store = createStore(storage_operator);




class Navi extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App_main>
            <Switch>
              <Route exact path='/' component={Home} />
              
              <Route path='/login' component={Login} />
              <Defaultpage>
                <Route path='/about' component={About} />
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