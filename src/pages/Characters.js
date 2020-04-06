import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import CharactersList from '../components/CharactersList'
import { Flex, Image } from '@chakra-ui/core'
import { connect } from 'react-redux'
// import {Link} from "react-router-dom"

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChangeText(text){
    this.setState({ text });
  }

  onChangeSelection(text){

  }

  render(){
    const { text } = this.state;
    const { suggestions } = this.props;
    return (
      <>
        <br/>
        <Flex m="auto" w={["50vw", "30vw", "50vw", "30vw", ]}>
        <Image src="../characters.png" alt="Rick & Morty"/>
        </Flex>
        <br/>
        <SearchBar 
          text={text}
          suggestions={suggestions}
          onChangeText={this.onChangeText}
          onChangeSelection={this.onChangeSelection}
        />
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
