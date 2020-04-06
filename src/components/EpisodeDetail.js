import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/core';

export default function EpisodeDetail () {
  return (
    <Flex justify="center">
      <Box w="60vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <br/>
        <Flex justify="center">
          <Image src="../rickymorty.png" alt="name" w={["60vw", "30vw", "40vw", "30vw"]} />
        </Flex>
        <Box p="6" >
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Episode
          </Box>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Name
          </Box>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Air Date
          </Box>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Characters
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
