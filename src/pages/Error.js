import React from 'react'
import { Flex, Image, Heading } from '@chakra-ui/core'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <>
      <Flex justify="center">
        <Heading as="h1" color="c1.100">
          Error. Not Found        
        </Heading>
      </Flex>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "20vw"]}>
        <Image src="../erroe.gif" alt="Rick & Morty"/>
      </Flex>
      <Flex justify="center">
        <Heading as="h1" color="c1.100">
          This route does not exist
        </Heading>      
      </Flex>
      <br/>
      <Flex justify="center">
        <Link to="/episodes" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Go Home
        </Link>
      </Flex>
    </>
  )
}

export default Error