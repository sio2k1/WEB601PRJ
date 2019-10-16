/*
  This is our routing container, it combines app layout and routes.
  it also gather information about articles( dynamic pages from BD) and building routes according to them
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
//import Contacts from '../contacts/contacts'
import PlEditor from '../admin/price_editor/pl_editor'
import UEditor from '../admin/users_editor/u_editor'
import AdminLayoutRoute from '../admin/admin_layout' // pages with special layout for admin panel
import DefaultLayoutRoute from '../defaultpage/defaultpage' // pages with default layout 
import NotFound from '../defaultpage/404' //component for 404 page not found

import api from '../../api_list/api_articles_axios' //load api connector for this particular component
import * as operations from '../../api_list/api_operations' // component with api calls for get\post\put\delete






class Routing extends React.Component{
  i;
  constructor(props) { // initialization
    super(props);
    this.state = {data:[], isFetching:false, show404:false} //set default value as abject with empty arrays
    this.i=0; // this i we use to create keys for routes
  }
  async componentDidMount() // load article data on mount
  {
    this.setState({...this.state, isFetching: true}); // start of fetching
    const inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH')
    this.setState({data: inData, isFetching: false}); // end of fetching after await

    setTimeout(() => { // i experience 404 page blinking while app loading, so i delay its rout for 300ms
      this.setState({show404: true});
    }, 300);

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
    
    return (
      <AppLayout>
        <Switch>  
          <Route key={this.i++} exact path='/' component={Home} />
          <Route key={this.i++} path='/home' component={Home} />
          <Route key={this.i++} path='/login' component={Login} />
          
          <AdminLayoutRoute key={this.i++} exact path='/admin' component={PlEditor} />
          <AdminLayoutRoute key={this.i++} path='/admin/pl-editor' component={PlEditor} />
          <AdminLayoutRoute key={this.i++} path='/admin/user-editor' component={UEditor} />

          <DefaultLayoutRoute key={this.i++} path='/price' component={Price} />
          {this.getArticleRouts() /* call function which builds dynamic routes */}
          {this.state.show404 ? (<DefaultLayoutRoute key={this.i++} component={NotFound} status={404} />) : (null)}
        </Switch>
      </AppLayout>
    )  
  }
}

function mapStateToProps(state) {
  return { articles: state.routing_navi_reducer.articles }
}

export default connect(mapStateToProps)(Routing)

//export default Routing;

// {data.map((article)=>
//   <DefaultLayoutRoute path={article.ArticleMatchPath} component={Contacts} article={article}/>
// )}

//<DefaultLayoutRoute path='/about' component={About} />
          //<DefaultLayoutRoute path='/contacts' component={Contacts} />


// class Routing extends React.Component{
//   render(){
//     return (
//       <AppLayout>
//         <Switch>  
//           <Route exact path='/' component={Home} />
//           <Route path='/home' component={Home} />
//           <Route path='/login' component={Login} />
          
//           <AdminLayoutRoute path='/admin' component={PlEditor} />
//           <AdminLayoutRoute path='/admin/pl-editor' component={PlEditor} />
//           <AdminLayoutRoute path='/admin/two' component={PlEditor} />
          
//           <DefaultLayoutRoute path='/about' component={About} />
//           <DefaultLayoutRoute path='/price' component={Price} />
//           <DefaultLayoutRoute path='/contacts' component={Contacts} />
//           <DefaultLayoutRoute component={NotFound} status={404} />
//         </Switch>
//       </AppLayout>
//     );
//   }
// }

/*
function mapStateToProps(state) {
  return { user_id: state.login_reducer.user_id }
}

export default connect(mapStateToProps)(Routing)
*/


