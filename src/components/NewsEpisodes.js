import React, { Component } from 'react'
import { Flex, Box, Badge, Image } from '@chakra-ui/core'

// Redux
import { connect } from 'react-redux'
import { showEpisodes } from '../redux/actions/showEpisodes'

class NewsEpisodes extends Component {
  componentDidMount() {
    this.props.showEpisodes();
  }

// Itera las Cards de los personajes
  renderEpisodeCard() {
    return this.props.episodes.map((episode, i) => {
      return (
        <p episode= {episode} key={i}> {episode.name} </p>
      )
    })
  }
  
  render(){
    return (
      <>
      <Flex justify="center">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src="rick.jpeg" alt="Morty" />
        </Box>
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" backgroundColor="white">
          <Box p="6" w="50vw">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" color="white" bg="#00b1c9">
                Recent Episodes
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {this.renderEpisodeCard()}
            </Box>
          </Box>
        </Box>
      </Flex>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.episode.list
  }
}

export default connect(mapStateToProps, {showEpisodes})(NewsEpisodes)