/*class App extends React.Component
{
    render()
    {
        const elem=['one','two'];
        const listItems = elem.map(el=><li>{el}</li>)
        return <ul>{listItems}</ul>
    }
}*/

/* //PROPS READ ONLY
class App extends React.Component
{
    render()
    {

        return <Greet greeting="Hello" ></Greet>
    }
}

class Greet extends React.Component
{
    render()
    {

        return <h2>{this.props.greeting}</h2>
    }
}*/

/*
class App extends React.Component
{
    constructor() {
        super();
        this.state = {name: "Alexey"};

    }
    changename = () =>
    {
        this.setState({name2: "Ivan"})
    }

    render()
    {
        return ( 
            <div><h3>Hello {this.state.name2}</h3><h3>Hello {this.state.name}</h3>
            
                <button type="button" onClick={this.changename.bind(this)}>Change</button>
                <button type="button" onClick={this.changename.bind(this)}>Change</button>

            </div>
            
        )
    }
}*/

class App extends React.Component
{
    constructor() {
        super();
        this.state = {name: "Alexey"};

    }
    componentDidMount()
    {
       this.setState({name: "Alexey22"}); 
       //ajax here
    }
    componentDidUpdate()
    {
       console.log("jupdatedddd", this.state);
       //после обновления стейта
    }
    render()
    {
        return ( 
            <div><h3>Hello {this.state.name}</h3>
            </div>
            
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'))