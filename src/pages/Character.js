import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import CharacterDetail from '../components/CharacterDetail'
import Title from '../components/Title'


const Character = () => {
  return (
    <>
      <Flex m="auto" w={["50vw", "50vw", "50vw", "30vw", ]}>
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