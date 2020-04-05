import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/core';

export default function CharacterDetail () {
  return (
    <Flex justify="center">
      <Box w="60vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <br/>
        <Flex justify="center">
          <Image src="../morty.jpeg" alt="name" />
        </Flex>
        <Box p="6" >
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
            Name
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}