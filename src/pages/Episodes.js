import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import EpisodesList from '../components/EpisodesList'


const Episodes = () => {
  return (
    <>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
      <Image src="../episodes.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Flex m="auto" w="90vw">
        <EpisodesList/>
      </Flex>
      <br/>
    </>
  )
}

export default Episodes