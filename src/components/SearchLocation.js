import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { Flex, Box } from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import fetchLocation from '../redux/actions/searchLocation'


const SearchLocation = () => {
  const dispatch = useDispatch();
  const [location_name, set_location_name] = useState("earth")

  return (
    <>
      <Flex justify="center" w="80vw">
      <div className="main-container">
        <InputBase
          placeholder="Search…"
          type="text"
          id="search_location"
          style={{ width: '100%' }}
          value={location_name}
          onChange={
            (event) => {
              set_location_name(event.target.value);
            }
          }
        />
      <Flex justify="center" w="80vw">
        <Box>
          <button 
          className="btn"
          onClick={
            () => {
              dispatch(fetchLocation(location_name))
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

export default SearchLocation;