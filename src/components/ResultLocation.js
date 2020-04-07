import React from 'react'
import LocationDetail from './LocationDetail'
import { useSelector } from 'react-redux'

const ResultLocation = () => {
  const seekerL = useSelector((state) => state.seekerL)
  return(
    <>
      {seekerL.loading && <div>Searching...</div>}
      {seekerL.location.length &&  
        <LocationDetail location={seekerL.location[0][0]} />}
      {seekerL.error && <div>Error</div>}
    </>
  )
}

export default ResultLocation