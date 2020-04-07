import { FETCH_LOCATIONS_REQUEST, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE } from "../actions/searchLocation"

const initialState = {
    loading: false,
    location: [],
    error: ''
}

const seekerL = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOCATIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_LOCATIONS_SUCCESS:
            return {
                loading: false,
                location: action.payload,
                error: ''
            }
        case FETCH_LOCATIONS_FAILURE:
            return {
                loading: false,
                location: [],
                error: action.payload
            }
        default: return state;
    }
}

export default seekerL;