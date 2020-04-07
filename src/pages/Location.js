import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import LocationDetail from '../components/LocationDetail'
import Title from '../components/Title'

const Location = () => {
  return (
    <>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
        <Image src="../location.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Title/>
      <br/>
      <LocationDetail/> 
    </>
  )
}

export default Location