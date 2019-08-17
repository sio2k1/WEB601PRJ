import * as act from './redux_login_actions'
import user_data from '../../jsondata/users.json'

let initialState = {user_id:-1, user_name:"", wrong_login_pwd:false};
function login_reducer(state=initialState, action)  {

  if (action.type==='TEST')
  {
    if ((action.login==='sio') && (action.pwd==='') ) 
    return Object.assign({}, state, 
      {
        user_id:2,user_name:"SiO"
      }
    )
  } else

  if (action.type===act.LOGOFF)
  {
    return Object.assign({}, state, 
      {
        user_name:"", user_id:-1,  wrong_login_pwd:false
      })
  } else


  if (action.type===act.LOGIN)
  {
    //let user_found = false;
    let usercred={user_found:false};
    user_data.users.map((u) => {
      if ((u.login.toLowerCase()===action.user_name.toLowerCase())&&(u.pwd===action.pwd))
      {
        usercred.user_found=true;
        usercred.login=u.login;
        usercred.id=u.id;   
      } 
    })
    if (usercred.user_found)
    {
      return Object.assign({}, state, 
        {
          user_name:usercred.login, user_id:usercred.id,  wrong_login_pwd:false
        })
    } else
    { 
      return Object.assign({}, state, 
        {
          wrong_login_pwd:true
        })
    }
  } else 
  {
      return state;
  }
}

export default login_reducer;


// const initialState = {
//     allIds: [],
//     byIds: {}
//   };
  
//   export default function(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//           return Object.assign({}, state, {
//             visibilityFilter: action.filter
//           })
//         default:
//           return state
//       } 
//   }