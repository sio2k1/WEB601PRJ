/*Reducers for articles in navigation bar and for getting access to articles from corresponding components*/
import * as act from '../actions/actions'

const action_set_articles = (state, action) => // set articles in store
{
    return {...state, articles:action.articles} // return new state as it is pure function
}

let initialState = {articles:[]}; // init state with emty array of articles
const routing_navi_reducer = (state=initialState, action) => {
  if (action.type===act.SETARTICLES) 
  {
    return action_set_articles(state,action); // call set articles if got corresponding action
  } 
  else 
  {
      return state;
  }
}

export default routing_navi_reducer;
