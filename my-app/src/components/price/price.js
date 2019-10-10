import React from 'react'
import './price.css';
import json_parser from './parser/json_parsers_price' //parse json from api to jsx
import TitleChanger from '../../functions/titlechanger' //for title change
import api from '../../api_list/api_price_list_axios' //load api connector fot this particular component
 
const TITLE = 'Prices Page'; //TitleChanger(TITLE);

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {price_table:[]} //set default value as empty array
  }

  async componentDidMount()
  {
    try {
      let inData = await api.get('/'); // using axios request api root (api url set up in import api from 'FILEPATH')
      this.setState({price_table: inData.data}); // adding json from api to state
    } catch(err)
    {
      console.error("Error response:");
      console.error(err.response);    
    }
  }

  render() {
    
    TitleChanger(TITLE); //rendering title
  
     //parsing json to jsx in return
    return (
      <div>     
        {json_parser(this.state.price_table)} 
      </div>
    );
  }
}

//{json_parser(this.state)} 
export default Price;


