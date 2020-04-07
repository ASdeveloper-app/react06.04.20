import React, { Component } from 'react'
import { Flex, Box, Badge, Image } from '@chakra-ui/core'

class NewsCharacters extends Component {
  render(){
    return (
      <>
      <Flex justify="center">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
          <Box p="6" w="50vw">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" color="white" bg="#00b1c9">
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
              
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src="rick.jpeg" alt="rick" />
        </Box>
      </Flex>
      </>
    )
  }
}

export default NewsCharacters