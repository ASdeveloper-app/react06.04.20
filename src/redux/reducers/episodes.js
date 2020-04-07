import { SHOW_EPISODES } from '../actions/showEpisodes'

const initialState = {
  list: []
}

export function showEpisodes(state = initialState, action){
  switch(action.type){
    case SHOW_EPISODES:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}
