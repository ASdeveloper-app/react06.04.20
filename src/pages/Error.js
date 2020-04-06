import React from 'react'
import { Flex, Image, Heading, Box } from '@chakra-ui/core'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <>
      <Flex justify="center" >
        <Heading as="h1" color="c1.100" mt="5vh">
          Error. Not Found        
        </Heading>
      </Flex>
      <Flex justify="center" w={["100vw", "30vw", "50vw", "70vw"]} >
        <Box>
          <Image src="../erroe.gif" alt="Rick & Morty"/>
        </Box>
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