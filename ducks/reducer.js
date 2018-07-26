// Redux is one of the main pieces of Redux. 
// Reducers take in ACTIONS and STATE, and return a NewState. This pattern is important because it leaves full controll of STATE in the STORE 


// our list of chores allows us to add chores to it;

import { createStore } from 'redux';


// reducwe should be in its own file so we will create its own file and move it there;
// function reducer(state) {
//   return state;
// }

var initialState = {
  // e.g our list of chores
  chores: ['Dishes', 'Laundry', 'Vaccuum', 'Learn Redux']
};

export default createStore(reducer, initialState);
