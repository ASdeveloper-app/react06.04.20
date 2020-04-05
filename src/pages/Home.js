import React from 'react'
import { Flex, Image, Text, Button } from '@chakra-ui/core'
// import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "60vw", ]}>
        <Image src="../Rick&Morty.png" alt="Rick & Morty"/>
      </Flex>
      <Flex justify="center">
        <Text w="80vw" color="c1.100">This page is about the best show on earth, Rick and Morty! </Text>
      </Flex>
      <br/>
      <Flex justify="center">
        <Button variantColor="teal" size="md">
          Go now
        </Button>
      </Flex>
      <br/>
    </>
  )
}

export default Home