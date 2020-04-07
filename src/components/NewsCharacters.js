import React, { Component } from 'react'
import { Flex, Box, Badge, Image } from '@chakra-ui/core'

// Redux
import { connect } from 'react-redux'
import { showCharacters } from '../redux/actions/showCharacters'

class NewsCharacters extends Component {
  componentDidMount() {
    this.props.showCharacters();
  }

// Itera las Cards de los personajes
  renderCharacterCard() {
    return this.props.characters.map((character, i) => {
      return (
        <p character= {character} key={i}> {character.name} </p>
      )
    })
  }
  
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
          <Image src="morty.jpeg" alt="Morty" />
        </Box>
      </Flex>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.character.list
  }
}

export default connect(mapStateToProps, {showCharacters})(NewsCharacters)