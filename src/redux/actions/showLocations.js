import axios from 'axios'

export const SHOW_LOCATIONS = 'SHOW_LOCATIONS'


export function showLocations(){
    return (dispatch) => {
        axios.get('https://rickandmortyapi.com/api/location')
        .then((response) => {
            console.log(response)
            dispatch({ type: SHOW_LOCATIONS, payload: response.data.results })
        })
    }

}