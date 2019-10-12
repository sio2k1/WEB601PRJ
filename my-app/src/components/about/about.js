/*
This stateful component show us an article text from json, that stored in database,
we use /article/:id api to get article with id = 1 (id is hardcoded atm)
*/
import React from 'react'
import TitleChanger from '../../functions/titlechanger'
import './about.css';
import json_parser from '../common/page_json_parser.js' // this will parce json to jsx
import api from '../../api_list/api_articles_axios' //load api connector fot this particular component
import * as operations from '../../api_list/api_price_list_operations' // component with api calls for get\post\put\delete

const TITLE = 'About Page'; 

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:{header_pic:[],bottom_pic:[],data_p:[]}} //set default value as abject with empty arrays
  }

  async componentDidMount()
  { 
      let inData = await operations.FGetById(api,1) // using axios request api root (api url set up in import api from 'FILEPATH'), this is getting by record id /api/articles/1
      if (inData!==null) // if we cannot get any response from server, show nothing
      {
        this.setState({data: JSON.parse(inData.ArticleDataJson)}); // adding json from api to state   
      } 
  }

   render() {
    TitleChanger(TITLE); //rendering title
     //parsing json to jsx in return
     return (
      <div>
        {json_parser( this.state.data)}
      </div>
      )
  }
}

export default About;