import React from 'react'
import SearchBar from '../components/SearchBar'
import CharactersList from '../components/CharactersList'
import { Flex, Image } from '@chakra-ui/core'
// import {Link} from "react-router-dom"

const Characters = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "30vw", ]}>
      <Image src="../characters.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <SearchBar/>
      <br/>
      <CharactersList/>
      <br/> 
    </>
  )
}

export default Characters