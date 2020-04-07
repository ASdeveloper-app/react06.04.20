import axios from 'axios'

export const FETCH_LOCATIONS_REQUEST = 'FETCH_LOCATIONS_REQUEST'
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE' 

export const fetchLocationRequest = () => {
    return {
        type: FETCH_LOCATIONS_REQUEST
    }
}

export const fetchLocationSuccess = (location) => {
    return {
        type: FETCH_LOCATIONS_SUCCESS,
        payload: location
    }
}
export const fetchLocationFailure = (error) => {
    return {
        type: FETCH_LOCATIONS_FAILURE,
        payload: error
    }
}

const fetchLocation = (value) => {
    return(dispatch) => {
        dispatch(fetchLocationRequest());
        axios.get(`https://rickandmortyapi.com/api/location/?name=${value}`)
        .then(response => {
            dispatch(fetchLocationSuccess([response.data.results]))
        })
        .catch(error => {
            dispatch(fetchLocationFailure('The Episode was not found'))
        })
    }

}

export default fetchLocation;