import axios from 'axios'

export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST'
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS'
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE' 

export const fechEpisodeRequest = () => {
    return {
        type: FETCH_EPISODES_REQUEST
    }
}

export const fechEpisodeSuccess = (episode) => {
    return {
        type: FETCH_EPISODES_SUCCESS,
        payload: episode
    }
}
export const fechEpisodeFailure = (error) => {
    return {
        type: FETCH_EPISODES_FAILURE,
        payload: error
    }
}

const fetchEpisode = (value) => {
    return(dispatch) => {
        dispatch(fechEpisodeRequest());
        axios.get(`https://rickandmortyapi.com/api/episode/?name=${value}`)
        .then(response => {
            dispatch(fechEpisodeSuccess([response.data.results]))
        })
        .catch(error => {
            dispatch(fechEpisodeFailure('The Episode was not found'))
        })
    }

}

export default fetchEpisode;