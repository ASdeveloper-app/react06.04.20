import React, { Component } from 'react'
import { SimpleGrid } from '@chakra-ui/core'
import CharacterCard from './CharacterCard'
// Redux
import { connect } from 'react-redux'
import { showCharacters } from '../redux/actions/showCharacters'

class CharactersList extends Component {
  componentDidMount() {
    this.props.showCharacters();
  }

// Itera las Cards de los personajes
  renderCharacterCard() {
    return this.props.characters.map((character, i) => {
      return (
        <CharacterCard character= {character} key={i}/>
      )
    })
  }
  
  render(){
    return (
      <> 
        <SimpleGrid columns={[1, 2, 3]} spacing={10} marginLeft="5vw">
          {this.renderCharacterCard()}
        </SimpleGrid>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.character.list
  }
}

export default connect(mapStateToProps, {showCharacters})(CharactersList)
