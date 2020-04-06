import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import { showCharacters } from './reducers/characters'


// import postCharacters from './reducers/postCharacters';

// import currentItem from './reducers/currentItem';
// import results from './reducers/results';
// import suggestions from './reducers/suggestions';

// const reducer = combineReducers(
//   {
//     post: postCharacters,
//     currentItem,
//     results,
//     suggestions,
//   }
// );

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;


const reducers = combineReducers({
    character: showCharacters
});



const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;