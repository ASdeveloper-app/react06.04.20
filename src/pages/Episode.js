import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import EpisodeDetail from '../components/EpisodeDetail'
import Title from '../components/Title'

const Episode = () => {
  return (
    <>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
      <Image src="../episode.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Title/>
      <br/>
      <EpisodeDetail/> 
    </>
  )
}

export default Episode