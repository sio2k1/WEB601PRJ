import {createStore} from 'my_redux.js'

/*
let initialState = {test:1};
const store = createStore(reducer,initialState);

reducer = (state, action) => {

        if (action.type==='INC')
        {
            return {test: state.test+1};
        } else 
        {
            return state;
        }
}*/

const increment_act = {type: 'INC'};


class App extends React.Component
{
    constructor() {
        super();
        
        //this.increment = this.increment.bind(this);

    };

    increment() {
        //store.dispatch(increment_act);
    };

    componentDidMount()
    {
       //subscribe(()=>this.forceUpdate());
    }
    componentDidUpdate()
    {
       //console.log("jupdatedddd", this.state);
       //после обновления стейта
    }
    render()
    {
        return ( 
            <div><h3>Hello </h3>
            <button className="increment" onClick={this.increment}>+</button>
            </div>
            
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'))