import React from 'react'
import CharacterCard from './CharacterCard'
import { useSelector } from 'react-redux'

const Results = () => {
  const seeker = useSelector((state) => state.seeker)
  return(
    <>
      {seeker.loading && <div>Searching...</div>}
      {seeker.character.length &&  
        <CharacterCard character={seeker.character[0][0]} />}
      {seeker.error && <div>Error</div>}
    </>
  )
}

export default Results