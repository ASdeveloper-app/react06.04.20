import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/core';

export default function LocationDetail ({location}) {
  return (
    <Flex justify="center">
      <Box w="60vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <br/>
        <Flex justify="center">
          <Image src="../portal.png" alt="name" w={["60vw", "30vw", "40vw", "30vw"]} />
        </Flex>
        <Box p="6" >
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Name: {location.name}
          </Box>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Type: {location.type}
          </Box>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            Dimension: {location.dimension}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
