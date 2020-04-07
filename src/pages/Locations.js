import React from 'react'
import LocationsList from '../components/LocationsList'
import { Flex, Image } from '@chakra-ui/core'
// import {Link} from "react-router-dom"

const Locations = () => {
  return (
    <>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
        <Image src="../locations.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Flex m="auto" w="95vw">
        <LocationsList/>
      </Flex>
      <br/>
    </>
  )
}

export default Locations