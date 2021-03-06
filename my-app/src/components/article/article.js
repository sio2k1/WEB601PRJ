/*
This stateful component show us an article text from json, which is stored in database,
we use /article/:id api to get an article 
*/
import React from 'react'
import TitleChanger from '../../functions/titlechanger'
import json_parser from './parser/page_json_parser' // this will parce json to jsx
import api from '../../api_list/api_articles_axios' //load api connector fot this particular component
import * as operations from '../../api_list/api_operations' // component with api calls for get\post\put\delete

class Article extends React.Component { //init state
  
  constructor(props) {
    super(props);
    this.state = {data:{header_pic:[],bottom_pic:[],data_p:[]}, isFetching:false} //set default value as an object with empty arrays
   
  }

  async getData() // method for get an article by article.ArticleId from props (to refresh article content on route change)
  {
    
      const article = this.props.article; // we pass actual article object in props
      //console.log( this.props.article);
      this.setState({...this.state, isFetching: true});
      const inData = await operations.FGetById(api,article.ArticleId);
      if(this.mounted) { // we use this to avoid errors with setting state if component is not exists anymore
        this.setState({data: JSON.parse(inData.ArticleDataJson), isFetching: false});
      }
      
  }

  componentDidMount() // call fetching on mount
  { 
    this.mounted = true;
    this.getData(); 
  }
  componentWillUnmount() {
    this.mounted = false; //set unmounted flag
  }

  componentDidUpdate(prevProps) {   // if some props changed
    if (this.props.article !== prevProps.article) { // request data from db on article change in props
      this.getData();
    }
  }

  render() {
    if (!this.state.isFetching) // rendering if fetching is complete
    {
      const article = this.props.article; 
      TitleChanger(article.ArticleTitle); //rendering title
      //parsing json to jsx in return
      return (
        <div>
          {json_parser(this.state.data) /* call parser to parse json to page content */}
        </div>
      )
    } else
    { // return "Loading..."
      return( 
        <div className="article-content-centerer">         
          <div className="article-content">
            Loading...
          </div>
        </div> 
    )
    }
}
}
export default Article;

