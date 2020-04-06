import axios from "axios"

// Base del end point
const BASEURL = "https://rickandmortyapi.com/api";

// Funcion para traer los personajes
export const apiGetCharacters = async () => {
    // End point de personajes
    const ITEM = "character"
    // Revisa cuantas paginas tiene
    const page1 = (await axios.get(`${BASEURL}/${ITEM}`)).data
    const {pages} = page1.info
    // Realiza las peticiones con las paginas que obtuvo
    const promises = Array(pages-1).fill("").map((_,i) => axios.get(`${BASEURL}/${ITEM}/?page=${i+2}`))
    const pageX = (await (Promise.all(promises))).flatMap(value => value.data.results)
    // Une los resultados de todas las paginas (pageX) mas los de de page1
    const characters = [...page1.results,...pageX];
    console.log(characters)
    return characters;
};

// Funcion para traer los espisodios
export const apiGetEpisodes = async () => {
    // End point de episodios
    const ITEM = "episode"
    // Revisa cuantas paginas tiene
    const page1 = (await axios.get(`${BASEURL}/${ITEM}`)).data
    const {pages} = page1.info
    // Realiza las peticiones con las paginas que obtuvo
    const promises = Array(pages-1).fill("").map((_,i) => axios.get(`${BASEURL}/${ITEM}/?page=${i+2}`))
    const results = (await (Promise.all(promises))).flatMap(value => value.data.results)
    // Une los resultados de todas las paginas (pageX) mas los de de page1
    const episodes = [...page1.results,...results];
    console.log(episodes)
    return episodes;
};

// Funcion para traer las ubicaciones
export const apiGetLocations = async () => {
    // End point de ubicaciones
    const ITEM = "location"
    // Revisa cuantas paginas tiene
    const page1 = (await axios.get(`${BASEURL}/${ITEM}`)).data
    const {pages} = page1.info
    // Realiza las peticiones con las paginas que obtuvo
    const promises = Array(pages-1).fill("").map((_,i) => axios.get(`${BASEURL}/${ITEM}/?page=${i+2}`))
    const results = (await (Promise.all(promises))).flatMap(value => value.data.results)
    // Une los resultados de todas las paginas (pageX) mas los de de page1
    const location = [...page1.results,...results];
    console.log(location)
    return location;
};
