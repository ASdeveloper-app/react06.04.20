import axios from 'axios'

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE' 

export const fechCharacterRequest = () => {
    return {
        type: FETCH_CHARACTERS_REQUEST
    }
}

export const fechCharacterSuccess = (character) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: character
    }
}
export const fechCharacterFailure = (error) => {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error
    }
}

const fetchCharacter = (value) => {
    return(dispatch) => {
        dispatch(fechCharacterRequest());
        axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`)
        .then(response => {
            dispatch(fechCharacterSuccess([response.data.results]))
        })
        .catch(error => {
            dispatch(fechCharacterFailure('The character was not found'))
        })
    }

}

export default fetchCharacter;