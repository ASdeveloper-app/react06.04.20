import { SHOW_CHARACTERS } from '../actions/showCharacters'

const initialState = {
  list: []
}

export function showCharacters(state = initialState, action){
  switch(action.type){
    case SHOW_CHARACTERS:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state;
  }
}
