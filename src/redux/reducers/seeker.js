import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions/search"

const initialState = {
    loading: false,
    character: [],
    error: ''
}

const seeker = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                loading: false,
                character: action.payload,
                error: ''
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                loading: false,
                character: [],
                error: action.payload
            }
        default: return state;
    }
}

export default seeker;