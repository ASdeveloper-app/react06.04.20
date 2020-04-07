import axios from 'axios'

export const SHOW_EPISODES = 'SHOW_EPISODES'


export function showEpisodes(){
    return (dispatch) => {
        axios.get('https://rickandmortyapi.com/api/episode')
        .then((response) => {
            console.log(response)
            dispatch({ type: SHOW_EPISODES, payload: response.data.results })
        })
    }

}