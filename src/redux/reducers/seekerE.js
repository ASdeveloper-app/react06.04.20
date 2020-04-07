import { FETCH_EPISODES_REQUEST, FETCH_EPISODES_SUCCESS, FETCH_EPISODES_FAILURE } from "../actions/searchEpisode"

const initialState = {
    loading: false,
    episode: [],
    error: ''
}

const seekerE = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EPISODES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EPISODES_SUCCESS:
            return {
                loading: false,
                episode: action.payload,
                error: ''
            }
        case FETCH_EPISODES_FAILURE:
            return {
                loading: false,
                episode: [],
                error: action.payload
            }
        default: return state;
    }
}

export default seekerE;