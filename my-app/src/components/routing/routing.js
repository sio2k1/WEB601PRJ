/*
  This is our routing container, it combines app layout and routes.
  it also gather information about articles( dynamic pages from BD) and building routes 
  according to them and passing article objects to 
  corresponding components, so they can load articles on mount
*/
import React from 'react';
import {connect} from 'react-redux'; 
import {Route, Switch} from 'react-router-dom'
import AppLayout from '../app_layout/app_layout'
import Login from '../login/login'
import Home from '../home/home'
import Article from '../article/article'
import Price from '../price/price'
import {a_setArticles} from '../routing/redux_routingnavi_actions'
import PlEditor from '../admin/price_editor/pl_editor'
import UEditor from '../admin/users_editor/u_editor'
import AdminLayoutRoute from '../admin/admin_layout' // pages with special layout for admin panel
import DefaultLayoutRoute from '../defaultpage/defaultpage' // pages with default layout 
import NotFound from '../defaultpage/404' //component for 404 page not found

import api from '../../api_list/api_articles_axios' //load api connector for this particular component
import * as operations from '../../api_list/api_operations' // component with api calls for get\post\put\delete


class Routing extends React.Component{
  constructor(props) { // initialization
    super(props);
    this.state = {data:[], isFetching:false} //set default value as object with empty arrays
    this.i=0; // this "i" is used to create keys for routes

  }
  async componentDidMount() // load article data on mount
  {
    this.setState({...this.state, isFetching: true}); // start of fetching
    const inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH')   
    this.setState({data: inData, isFetching: false}); // end of fetching after await
  }
  
  
  getArticleRouts = () => // this one is returning routs to articles according to articles from DB
  {
    const {data} = this.state;
    //data.map ((article)=>{console.log(article)})    
    if (!data.isFetching) // enable this routs on fetching complete
    {
      this.props.dispatch(a_setArticles(data)); // saving articles data in store, so we can use them later in navigation bar
      let result = []; //we returning an array to avoid parent tag, which screws react router and stop switch
      data.forEach((article)=> {
        result.push(<DefaultLayoutRoute key={this.i++} path={article.ArticleMatchPath} component={Article} article={article}/>)
      })    
      return result;  
    }  
  }


  render(){
    // returning routes
    return (
      <AppLayout>
        <React.Fragment>
        <Switch>  
          <Route key={this.i++} exact path='/' component={Home} />
          <Route key={this.i++} path='/home' component={Home} />
          <Route key={this.i++} path='/login' component={Login} />
          
          <AdminLayoutRoute key={this.i++} exact path='/admin' component={PlEditor} />
          <AdminLayoutRoute key={this.i++} path='/admin/pl-editor' component={PlEditor} />
          <AdminLayoutRoute key={this.i++} path='/admin/user-editor' component={UEditor} />

          <DefaultLayoutRoute key={this.i++} path='/price' component={Price} />
          {this.getArticleRouts() /* call function which builds dynamic routes */}
          {!this.state.isFetching ? (<DefaultLayoutRoute key={this.i++} component={NotFound} status={404} />) : (null) /* add 404 route after fetching, so we wont experience 404 page blinking at start */}
        </Switch>
        </React.Fragment>
      </AppLayout>
    )  
  }
}

function mapStateToProps(state) { // map articles from store 
  return { articles: state.routing_navi_reducer.articles }
}

export default connect(mapStateToProps)(Routing) // connect to redux store


