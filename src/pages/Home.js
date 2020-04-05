import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/core'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "60vw", ]}>
        <Image src="../rickymorty.png" alt="Rick & Morty"/>
      </Flex>
      <Flex justify="center">
        <Text className="mg-home" w="80vw" color="c1.100">This page is about the best show on earth, Rick and Morty! </Text>
      </Flex>
      <br/>
      <Flex justify="center">
        <Link to="/news" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Go now!
        </Link>
      </Flex>
      <br/>
    </>
  )
}

export default Home