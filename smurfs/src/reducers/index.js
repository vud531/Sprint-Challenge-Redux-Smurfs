/*
  Be sure to import in all of the action types from `../actions`
*/

import * as Action from '../actions/index';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurf: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state=initialState, action) => {
  switch (action.type) {
    case Action.GET_SMURFS_START:
    return {
      smurf: [],
      fetchingSmurfs: true,
      addingSmurf: false,
      error: null
    }

    
    case Action.GET_SMURFS_SUCCESS:
    return {
      smurf: action.payload,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: null
    }

    
    case Action.GET_SMURFS_FAILURE:
    return {
      smurf: [],
      fetchingSmurfs: true,
      addingSmurf: false,
      error: action.err
    }    
    
    case Action.ADD_SMURFS_START:
    return {
      smurf: [],
      fetchingSmurfs: false,
      addingSmurf: true,
      error: null
    }

    
    case Action.ADD_SMURFS_SUCCESS:
    return {
      smurf: action.payload,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: null
    }

    
    case Action.ADD_SMURFS_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      addingSmurf: false,
      error: action.err
    }

    default:
    return state;
  }
}