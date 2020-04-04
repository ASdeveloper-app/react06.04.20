import React from 'react'
import Title from '../components/Title'
import SearchBar from '../components/SearchBar'
import CharactersList from '../components/CharactersList'
// import {Link} from "react-router-dom"

const Characters = () => {
  return (
    <>
      <Title/>
      <SearchBar/>
      <CharactersList/>
        <p>Hello from Characters page</p>
        <p>Structure tests</p> 
    </>
  )
}

export default Characters