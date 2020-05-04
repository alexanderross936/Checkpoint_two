import { combineReducers } from 'redux';
import { addBusiness, removeBusiness } from './actions'

const user = (state = null) => state

// add switch statements in here
const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const newState = [ ...state ]
            newState.splice(action.value, 1);
            return newState;
     default: // need this for default case
      return state 
    }
}

export default combineReducers({ user, businesses })