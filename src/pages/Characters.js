import React, { Component } from 'react'
import { Flex, Image } from '@chakra-ui/core'
import { connect } from 'react-redux'

import CharactersList from '../components/CharactersList'

class Characters extends Component {

  render(){
    return (
      <>
        <br/>
        <Flex m="auto" w={["50vw", "30vw", "50vw", "30vw", ]}>
        <Image src="../characters.png" alt="Rick & Morty"/>
        </Flex>
        <br/>
        <CharactersList/>
        <br/> 
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions
  };
};

export default connect(mapStateToProps)(Characters);
