import React from 'react'
import { Flex, Image, Button, Box, SimpleGrid } from '@chakra-ui/core'

export default function CharactersList () {
  return (
    <> 
      <SimpleGrid columns={[1, 2, 3]} spacing={10} marginLeft="5vw">
      <Box maxW="25vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <Image src="rick.jpeg" alt="name" />
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
          <br/>
          <Flex justify="center">
            <Button textAlign="center" variantColor="green">More</Button>
          </Flex>
        </Box>
      </Box>
      <Box maxW="25vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <Image src="rick.jpeg" alt="name" />
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
      <Box maxW="25vw" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="c1.100">
        <Image src="rick.jpeg" alt="name" />
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
      </SimpleGrid>
    </>
  )
}