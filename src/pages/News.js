import React from 'react'
import { Flex, Image, Box, Badge} from '@chakra-ui/core'
import {Link} from "react-router-dom"

const News = () => {
  return (
    <>
      <Flex m="auto" w={["100vw", "30vw", "20vw", "20vw", ]}>
      <Image src="../news.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Flex justify="center">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
          <Box p="6" w="50vw">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" variantColor="teal">
                Recent Characters
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <p>Characters</p>
              <p>Characters</p>
              <p>Characters</p>
              <p>Characters</p>
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src="morty.jpeg" alt="Morty" />
        </Box>
      </Flex>
      <br/>
      <Flex justify="center">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src="rick.jpeg" alt="Morty" />
        </Box>
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
          <Box p="6" w="50vw">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" variantColor="teal">
                Recent Episodes
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              <p>Characters</p>
              <p>Characters</p>
              <p>Characters</p>
              <p>Characters</p>
            </Box>
          </Box>
        </Box>
      </Flex>
      <br/>
      <Flex justify="center">
        <Link to="/characters" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Characters
        </Link>
        <Link to="/episodes" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Episodes
        </Link>
      </Flex>
    </>
  )
}

export default News