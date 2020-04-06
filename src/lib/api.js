// Base del end point
const BASEURL = "https://rickandmortyapi.com/api";

// Funcion para traer los personajes
export const apiGetCharacters = async () => {
    const url = BASEURL + "/character" ;
    const response = await fetch(url)
    const dataJson = await response.json()
    console.log(dataJson.results)
    return dataJson.results
};

// Funcion para traer los espisodios
export const apiGetEpisodes = async () => {
    const url = BASEURL + "/episode" ;
    const response = await fetch(url)
    const dataJson = await response.json()
    console.log(dataJson.results)
    return dataJson.results
};

