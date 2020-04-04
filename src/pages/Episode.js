import React from 'react'
import Title from '../components/Title'
import EpisodeDetail from '../components/EpisodeDetail'
// import {Link} from "react-router-dom"

const Episode = () => {
  return (
    <>
      <Title/>
      <EpisodeDetail/>
        <p>Hello from Episode page</p>
        <p>Structure tests</p> 
    </>
  )
}

export default Episode