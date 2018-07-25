// REDUX - STORE

// we install redux from npm

import { createStore } from 'redux';

// to create a store you need two things: reducer and initialState;

function reducer(state) {
  return state;
}

// our initialState - this is anything that we need our Application to keep track of; we need to put it iniside this object;

var initialState = {
  // e.g our list of chores
  chores: ['Dishes', 'Laundry', 'Vaccuum', 'Learn Redux']
};

// now that we have our initialState and reducer we can export from this file createStore; passing in our reducer and initialState;

export default createStore(reducer, initialState);

// later we'll connect this store to our components; but for now we just setup and created our store for redux.