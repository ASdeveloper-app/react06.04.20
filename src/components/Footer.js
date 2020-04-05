import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core'

export default function Footer() {
  return (
    <>
      <Breadcrumb  
        spacing={3} 
        bottom={0}
        zIndex="99"
        textAlign="center"
        backgroundColor="transparent"
        w="100vw"
        h="4vh"
        justify="center">
        <BreadcrumbItem mt={1}>
          <BreadcrumbLink color="c1.100" > 06 . 04 . 20</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <BreadcrumbLink href="https://www.asdeveloper.app/" isExternal>
          <Heading as="h1" color="c1.100">
            A | S
          </Heading>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink color="c1.100">Arturo Araujo</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  )       
}