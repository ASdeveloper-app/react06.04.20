import React from 'react'
import Title from '../components/Title'
import CharacterDetail from '../components/CharacterDetail'
// import {Link} from "react-router-dom"

const Character = () => {
  return (
    <>
      <Title/>
      <CharacterDetail/>
        <p>Hello from Character page</p>
        <p>Structure tests</p> 
    </>
  )
}

export default Character