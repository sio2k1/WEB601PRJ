import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './my_redux'
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import App_main from './components/basic/app_component'
import Login from './components/login/login'
const history = createBrowserHistory();

const Home = () => {
return (
  <div>
    <h2>Home</h2>
  </div>
  )
}




class Navi extends React.Component{
  render(){
    return (
      <BrowserRouter history={history}>
      <App_main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </App_main>
    </BrowserRouter>
    );
  }
}



ReactDOM.render(<Navi />,document.getElementById('root'))

//export default App;
export default Navi;