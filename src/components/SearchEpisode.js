import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { Flex, Box } from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import fetchEpisode from '../redux/actions/searchEpisode'


const SearchEpisode = () => {
  const dispatch = useDispatch();
  const [episode_name, set_episode_name] = useState("pilot")

  return (
    <>
      <Flex justify="center" w="80vw">
      <div className="main-container">
        <InputBase
          placeholder="Search…"
          type="text"
          id="search_episode"
          style={{ width: '100%' }}
          value={episode_name}
          onChange={
            (event) => {
              set_episode_name(event.target.value);
            }
          }
        />
      <Flex justify="center" w="80vw">
        <Box>
          <button 
          className="btn"
          onClick={
            () => {
              dispatch(fetchEpisode(episode_name))
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

export default SearchEpisode;