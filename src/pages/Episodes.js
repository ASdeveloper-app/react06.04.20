import React from 'react'
import SearchBar from '../components/SearchBar'
import EpisodesList from '../components/EpisodesList'
import { Flex, Image } from '@chakra-ui/core'
// import {Link} from "react-router-dom"

const Episodes = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "25vw", ]}>
      <Image src="../episodes.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <SearchBar/>
      <br/>
      <Flex m="auto" w="80vw">
        <EpisodesList/>
      </Flex>
      <br/>
    </>
  )
}

export default Episodes