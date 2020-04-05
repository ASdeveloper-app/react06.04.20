import React from 'react'
import { Input, Flex, IconButton } from "@chakra-ui/core";

export default function SearchBar () {
  return (
    <>
      <Flex justify="center" mt="5vh" mb="5vh">
        <Input placeholder="Search" size="md" w="50vw"/>
        <IconButton variantColor="teal" aria-label="Search database" icon="search" />
      </Flex>
    </>
  )
}
