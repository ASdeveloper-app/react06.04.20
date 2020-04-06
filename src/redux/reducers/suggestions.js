import { fetchGetPost } from './postCharacters';

const defaultState = fetchGetPost;

function reducer(state = defaultState, {type, payload}) {
  switch (type) {
    case 'findSuggestions': {
      return fetchGetPost
    }
    default:
      return state;
  }
}

export default reducer;