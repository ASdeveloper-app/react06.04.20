import React from 'react'
import { Flex, Image, Box, Button } from '@chakra-ui/core';

export default function CharacterCard ({character}) {
  return (
    <Box w={["80vw", "30vw", "25vw"]} borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
      <Image src={character.image} alt={character.name} />
      <Box p="6" >
        <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        key={character.id}
        >
          {character.name}
        </Box>
        <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        >
          {character.status}
        </Box>
        <br/>
        <Flex justify="center">
          <Button textAlign="center" variantColor="green">More</Button>
        </Flex>
      </Box>
    </Box> 
  )
}
