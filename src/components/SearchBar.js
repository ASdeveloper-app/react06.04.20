import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { Flex, Box } from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import fetchCharacter from '../redux/actions/search'


const SearchBar = () => {
  const dispatch = useDispatch();
  const [character_name, set_character_name] = useState("rick sanchez")

  return (
    <>
      <Flex justify="center" w="80vw">
      <div className="main-container">
        <InputBase
          placeholder="Search…"
          type="text"
          id="search_character"
          style={{ width: '100%' }}
          value={character_name}
          onChange={
            (event) => {
              set_character_name(event.target.value);
            }
          }
        />
      <Flex justify="center" w="80vw">
        <Box>
          <button 
          className="btn"
          onClick={
            () => {
              dispatch(fetchCharacter(character_name))
            }}
          >
            Search
          </button>
        </Box>
      </Flex>

      </div>
      </Flex>
    </>
  );

}

export default SearchBar;