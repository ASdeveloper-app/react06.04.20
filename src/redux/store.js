import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { showCharacters } from './reducers/characters'
import { showEpisodes } from './reducers/episodes'
import { showLocations } from './reducers/locations'

import seeker from './reducers/seeker';

const reducers = combineReducers({
    character: showCharacters,
    episode: showEpisodes,
    location: showLocations,
    seeker,
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;