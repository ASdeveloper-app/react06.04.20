import React from 'react'
import { Flex, Heading } from '@chakra-ui/core';

export default function Title () {
  return (
    <Flex justify="center">
      <Heading as="h1" color="c1.100">
        Morty
      </Heading>
    </Flex>
  )
}