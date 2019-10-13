import * as act from './redux_routingnavi_actions'


const action_login = (state, action) =>
{

    return Object.assign({}, state, 
      {
        articles:action.articles
      })
  
}

let initialState = {articles:[]};
const routing_navi_reducer = (state=initialState, action) => {
  if (action.type===act.SETARTICLES) 
  {
    return action_login(state,action);
  } 
  else 
  {
      return state;
  }
}

export default routing_navi_reducer;
