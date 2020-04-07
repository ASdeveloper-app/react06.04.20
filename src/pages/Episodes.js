import React from 'react'
import SearchBar from '../components/SearchBar'
import EpisodesList from '../components/EpisodesList'
import { Flex, Image } from '@chakra-ui/core'
// import {Link} from "react-router-dom"

const Episodes = () => {
  return (
    <>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
      <Image src="../episodes.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <SearchBar/>
      <br/>
      <Flex m="auto" w="90vw">
        <EpisodesList/>
      </Flex>
      <br/>
    </>
  )
}

export default Episodes