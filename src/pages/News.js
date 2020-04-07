import React from 'react'
import { Flex, Image } from '@chakra-ui/core'
import {Link} from "react-router-dom"
import NewsCharacters from '../components/NewsCharacters'
import NewsEpisodes from '../components/NewsEpisodes'

const News = () => {
  return (
    <>
      <Flex m="auto" w={["50vw", "30vw", "30vw", "20vw" ]}>
      <Image src="../news.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <NewsCharacters/>
      <br/>
      <NewsEpisodes/>
      <br/>
      <Flex justify="center">
        <Link to="/characters" className="btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Characters
        </Link>
      </Flex>
      <Flex justify="center">
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