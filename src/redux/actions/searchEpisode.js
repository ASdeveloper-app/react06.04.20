import axios from 'axios'

export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST'
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS'
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE' 

export const fetchEpisodeRequest = () => {
    return {
        type: FETCH_EPISODES_REQUEST
    }
}

export const fetchEpisodeSuccess = (episode) => {
    return {
        type: FETCH_EPISODES_SUCCESS,
        payload: episode
    }
}
export const fetchEpisodeFailure = (error) => {
    return {
        type: FETCH_EPISODES_FAILURE,
        payload: error
    }
}

const fetchEpisode = (value) => {
    return(dispatch) => {
        dispatch(fetchEpisodeRequest());
        axios.get(`https://rickandmortyapi.com/api/episode/?name=${value}`)
        .then(response => {
            dispatch(fetchEpisodeSuccess([response.data.results]))
        })
        .catch(error => {
            dispatch(fetchEpisodeFailure('The Episode was not found'))
        })
    }

}

export default fetchEpisode;