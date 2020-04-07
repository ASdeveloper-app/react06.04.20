import React from 'react'
import EpisodeDetail from './EpisodeDetail'
import { useSelector } from 'react-redux'

const ResultEpisode = () => {
  const seekerE = useSelector((state) => state.seekerE)
  return(
    <>
      {seekerE.loading && <div>Searching...</div>}
      {seekerE.episode.length &&  
        <EpisodeDetail episode={seekerE.episode[0][0]} />}
      {seekerE.error && <div>Error</div>}
    </>
  )
}

export default ResultEpisode