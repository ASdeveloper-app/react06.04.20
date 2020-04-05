import React from 'react'
import Title from '../components/Title'
import EpisodeDetail from '../components/EpisodeDetail'
import { Flex, Image } from '@chakra-ui/core'

const Episode = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "25vw", ]}>
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