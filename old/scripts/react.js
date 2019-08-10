


function Car(props)
{
    return (<p>{props.car.name}</p>);
}




class App extends React.Component {
    state = {
         cars: [{name: 'one'}, {name: 'two'}]
    }

    renderCars()
    {
        return this.state.cars.map(car=> {
            return (
                <Car car={car} />
            );
        });
    }

    render()
    {
        return (
            <div className="app">
                <div className="list">
                    {this.renderCars()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
  



//ReactDOM.render(<car />, document.getElementById('root'));