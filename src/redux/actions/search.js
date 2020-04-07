import axios from 'axios'

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE' 

export const fetchCharacterRequest = () => {
    return {
        type: FETCH_CHARACTERS_REQUEST
    }
}

export const fetchCharacterSuccess = (character) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: character
    }
}
export const fetchCharacterFailure = (error) => {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error
    }
}

const fetchCharacter = (value) => {
    return(dispatch) => {
        dispatch(fetchCharacterRequest());
        axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`)
        .then(response => {
            dispatch(fetchCharacterSuccess([response.data.results]))
        })
        .catch(error => {
            dispatch(fetchCharacterFailure('The character was not found'))
        })
    }

}

export default fetchCharacter;