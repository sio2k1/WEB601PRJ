/* This component displays price list */
import React from 'react'
import './price.css';
import json_parser from './parser/json_parsers_price' //parse json from api to jsx
import TitleChanger from '../../functions/titlechanger' //for title change
import api from '../../api_list/api_price_list_axios' //load api connector fot this particular component
import * as operations from '../../api_list/api_operations'
const TITLE = 'Prices Page'; //TitleChanger(TITLE);

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {price_table:[], isFetching: false} //set default value as empty array
  }

  async componentDidMount() //component fully loaded
  {
    this.setState({...this.state, isFetching: true}); // we r fetching, handle this in render()
    const inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH')
    this.setState({price_table: inData, isFetching: false});  // adding json from api to state, we r not fetching anymore
  }

  render() {
    
    TitleChanger(TITLE); //rendering title
  
    if (!this.state.isFetching) // if we r not fetching - > display data
    {
      //parsing json to jsx in return
      return (
        <div>     
          {json_parser(this.state.price_table) /*parsing json from API */} 
        </div>
      )
    } else // display loading if we r still fetching
    {
      return (<div>Loading...</div>)
    }
  }
}

export default Price;


