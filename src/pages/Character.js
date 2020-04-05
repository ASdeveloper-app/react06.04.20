import React from 'react'
import CharacterDetail from '../components/CharacterDetail'
import { Flex, Image } from '@chakra-ui/core'
import Title from '../components/Title'

const Character = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "30vw", ]}>
      <Image src="../characters.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Title/>
      <br/>
      <CharacterDetail/>
      <br/>  
    </>
  )
}

export default Character