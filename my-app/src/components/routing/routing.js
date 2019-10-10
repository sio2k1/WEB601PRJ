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
import AdminLayoutRoute from '../admin/admin_layout' // pages with special layout for admin panel
import DefaultLayoutRoute from '../defaultpage/defaultpage' // pages with default layout 
import NotFound from '../defaultpage/404' //component for 404 page not found

//this is our routing component, it combines app layout and routes.

const Routing = () =>
(
  <AppLayout>
    <Switch>  
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      
      <AdminLayoutRoute path='/admin' component={PlEditor} />
      <AdminLayoutRoute path='/admin/pl-editor' component={PlEditor} />
      <AdminLayoutRoute path='/admin/two' component={PlEditor} />
      
      <DefaultLayoutRoute path='/about' component={About} />
      <DefaultLayoutRoute path='/price' component={Price} />
      <DefaultLayoutRoute path='/contacts' component={Contacts} />
      <DefaultLayoutRoute component={NotFound} status={404} />
    </Switch>
  </AppLayout>
)  
export default Routing;

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

