import * as act from './redux_login_actions'
import user_data from '../../jsondata/users.json'

let initialState = {user_id:-1, user_name:""};
function login_reducer(state=initialState, action)  {

  if (action.type==='TEST')
  {
    if ((action.login==='sio') && (action.pwd==='') ) 
    return Object.assign({}, state, 
      {
        user_id:2,user_name:"SiO"
      }
    )
  } 
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
          user_name:usercred.login, user_id:usercred.id
        })
    } else
    { return state;}
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