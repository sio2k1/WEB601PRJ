import * as act from './redux_login_actions'
import user_data from '../../jsondata/users.json'

const action_login = (state, action) =>
{
  let user_cred={user_found:false};
  for(let u of user_data.users) {
    if ((u.login.toLowerCase()===action.user_name.toLowerCase())&&(u.pwd===action.pwd))
    {
      user_cred.user_found=true; //at login we try to find matching user from json
      user_cred.login=u.login;
      user_cred.id=u.id;   
    } 
  }
  if (user_cred.user_found)  //if managed to find user - > return new state with user id and username
  {
    return Object.assign({}, state, 
      {
        user_name:user_cred.login, user_id:user_cred.id,  wrong_login_pwd:false
      })
  } else //if NOT managed to find user - > return new state with failed login attempt to display msg about it to user
  { 
    return Object.assign({}, state, 
      {
        wrong_login_pwd:true
      })
  }
}

const action_logoff = (state) =>   //clear creds info and failed login attempt flag on logoff
{
  return Object.assign({}, state, 
    {
      user_name:"", user_id:-1,  wrong_login_pwd:false
    })
}

let initialState = {user_id:-1, user_name:"", wrong_login_pwd:false};
const login_reducer = (state=initialState, action) => {

  if (action.type==='TEST') //some testing here
  {
    return state;
  } 
  else if (action.type===act.LOGOFF) //call action_logoff func at logoff action
  {
    return action_logoff(state);
  } 
  else if (action.type===act.LOGIN) //call action_login func at logoff action
  {
    return action_login(state,action);
  } 
  else 
  {
      return state;
  }
}

export default login_reducer;
