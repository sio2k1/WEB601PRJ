import React from 'react';
//import {connect} from 'react-redux'; 
import {Route, Switch} from 'react-router-dom'
import AppLayout from '../app_layout/app_layout'
import Login from '../login/login'
import Home from '../home/home'
import About from '../about/about'
import Price from '../price/price'
import Contacts from '../contacts/contacts'
import PlEditor from '../admin/price_editor/pl_editor'
import UEditor from '../admin/users_editor/u_editor'
import AdminLayoutRoute from '../admin/admin_layout' // pages with special layout for admin panel
import DefaultLayoutRoute from '../defaultpage/defaultpage' // pages with default layout 
import NotFound from '../defaultpage/404' //component for 404 page not found

import api from '../../api_list/api_articles_axios' //load api connector for this particular component
import * as operations from '../../api_list/api_price_list_operations' // component with api calls for get\post\put\delete


//this is our routing component, it combines app layout and routes.



class Routing extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data:[]} //set default value as abject with empty arrays
  }
  async componentDidMount()
  {
    let inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH'), this is getting by record id /api/articles/1
    //console.log(inData);
    if (inData!==null) // if we cannot get any response from server, show nothing
    {
      //console.log(inData);
      this.setState({data: inData}); // adding json from api to state  
      //return (<Switch></Switch>)
      //this.setState({data: JSON.parse(inData.ArticleDataJson)}); // adding json from api to state   
    } 
  }

  getArticleRouts = () =>
  {
    const {data} = this.state;
    data.map ((article)=>{console.log(article)})
    
    
   
    
  }

  render(){
    const {data} = this.state;
    return (
      <AppLayout>
        <Switch>  
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          
          <AdminLayoutRoute exact path='/admin' component={PlEditor} />
          <AdminLayoutRoute path='/admin/pl-editor' component={PlEditor} />
          <AdminLayoutRoute path='/admin/user-editor' component={UEditor} />

          {data.map((article)=>
            <DefaultLayoutRoute path={article.ArticleMatchPath} component={Contacts} article={article}/>
          )}
          <DefaultLayoutRoute path='/price' component={Price} />
          <DefaultLayoutRoute path='/about' component={About} />
          <DefaultLayoutRoute path='/contacts' component={Contacts} />
          <DefaultLayoutRoute component={NotFound} status={404} />
         

          
          
          
          
        </Switch>
      </AppLayout>
    )  
  }
}
export default Routing;

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

