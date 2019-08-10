import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './my_redux'


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
      //const ufunc = store.subscribe(()=>console.log('changed'));

      //ufunc();
      this.setState({unsubscribe: ufunc}); 
      //store.subscribe(()=>this.forceUpdate());
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

ReactDOM.render(<App />,document.getElementById('root'))

export default App;
