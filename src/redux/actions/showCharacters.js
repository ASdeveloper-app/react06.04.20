import axios from 'axios'

export const SHOW_CHARACTERS = 'SHOW_CHARACTERS'


export function showCharacters(){
    return (dispatch) => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
            console.log(response)
            dispatch({ type: SHOW_CHARACTERS, payload: response.data.results })
        })
    }

}