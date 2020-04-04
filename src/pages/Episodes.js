import React from 'react'
import Title from '../components/Title'
import SearchBar from '../components/SearchBar'
import EpisodesList from '../components/EpisodesList'
// import {Link} from "react-router-dom"

const Episodes = () => {
  return (
    <>
      <Title/>
      <SearchBar/>
      <EpisodesList/>
        <p>Hello from Episodes page</p>
        <p>Structure tests</p> 
    </>
  )
}

export default Episodes