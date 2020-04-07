import { SHOW_LOCATIONS } from '../actions/showLocations'

const initialState = {
  list: []
}

export function showLocations(state = initialState, action){
  switch(action.type){
    case SHOW_LOCATIONS:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}
