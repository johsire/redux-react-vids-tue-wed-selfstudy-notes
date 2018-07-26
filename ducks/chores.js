
const ADD_CHORE = 'chores/ADD_CHORE'
const REMOVE_CHORE = 'chores/REMOVE_CHORE'


// state looks like this(its an object with chores values which has all the choes in it)
// var state = {
    // chores: ['Dishes', 'Laundry', 'Vaccuum', 'Learn Redux']
// }
// using the spread operator we can combine the old chores and the new chores;

// the action.type is going to be a string but the best practise is to save it in a string constant
export default function reducer(state, action) {
  switch(action.type) {
    case ADD_CHORE:
      var newState = {};

      // the new chores come in with the/ are brought by the action.payload + the old chores/ initalState
      var newChores = action.payload;
      var newChores = [...state.chores, newChores]

      // now we retun an obj that is = to newChores; which returns a completly new state for my reducer evertime it fires
      return {
        chores: newChores
      }
      // if we want to remove a chore we can add in a new case before the default case; & add string Const at the top;
    case REMOVE_CHORE:
      let targetChore = action.payload;
      // var newState = {};
      var newChores = [...state.chores];

      newChores.splice(newChores.indexOf(targetChore), 1);

      return {
        chores: newChores
      }
      // we need to return the default incase none of the cases matches so we dont get an error/ break anything;
  default:
      return state;
  }
}


// action creator is responsible for creating a properly formatted action; its not the action itself;
export function addChor(newChore) {
  return {
    type: ADD_CHORE,
    payload: newChore
  }
}

// since we are exporting it, we go and import it in our AddtoList Component;