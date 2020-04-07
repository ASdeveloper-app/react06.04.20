import React from 'react'
import { Flex, Image } from '@chakra-ui/core'
import NewsCharacters from '../components/NewsCharacters'
import NewsEpisodes from '../components/NewsEpisodes'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'
import SearchEpisode from '../components/SearchEpisode'
import ResultEpisode from '../components/ResultEpisode'

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
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "30vw"]}>
        <Image src="../characters.png" alt="Rick & Morty"/>
        </Flex>
      <br/>
      <Flex justify="center">
        <SearchBar />
      </Flex>
      <br/>
      <Flex justify="center">
        <Results/>
      </Flex>
      <br/>
      <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
      <Image src="../episodes.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Flex justify="center">
        <SearchEpisode />
      </Flex>
      <br/>
      <Flex justify="center">
        <ResultEpisode/>
      </Flex>
      <br/>
      {/* <Flex m="auto" w={["50vw", "30vw", "50vw", "25vw", ]}>
        <Image src="../locations.png" alt="Rick & Morty"/>
      </Flex>
      <br/>
      <Flex justify="center">
        <SearchBar />
      </Flex>
      <br/>
      <Flex justify="center">
        <Results/>
      </Flex> */}
      <br/>
      <br/>
    </>
  )
}

export default News