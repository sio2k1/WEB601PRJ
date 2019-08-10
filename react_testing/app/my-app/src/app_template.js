import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './my_redux'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const Home = () => {
return (
  <div>
    <h2>Home</h2>
  </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
    )
}

class Navi extends React.Component{
  render(){
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            
            </li>
            <li>
              
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

let initialState = {test:1};

let reducer = (state, action) => {

        if (action.type==='INC')
        {
            return {test: state.test+1};
        } else 
        {
            return state;
        }
}
const store = createStore(reducer,initialState);
const increment_act = {type: 'INC'};
class App extends React.Component
{
    constructor() {
        super();
        
        this.increment = this.increment.bind(this);
        this.unsub = this.unsub.bind(this);
        this.state={unsubscribe:{}}
    };
    
    increment() {
        store.dispatch(increment_act);
    };

    unsub() {
      this.state.unsubscribe();
    };

    componentDidMount()
    {
      let ufunc = store.subscribe(()=>this.forceUpdate());
      this.setState({unsubscribe: ufunc}); 
    }
    componentDidUpdate()
    {
       //console.log("jupdatedddd", this.state);
       //после обновления стейта
    }
    render()
    {
        return ( 
            <div>
              <h3>Hello {store.getState().test}</h3>
              <button className="increment" onClick={this.increment}>+</button>
              <button className="unsubs" onClick={this.unsub}>unsub</button>

            
            </div>
            
        );
    }
}

ReactDOM.render(<Navi />,document.getElementById('root'))

//export default App;
export default Navi;