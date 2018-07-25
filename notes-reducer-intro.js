
var state = {
  name: 'Joh',
  number: 7
}

var action = {
  type: 'CHANGE_NAME',
  payload: 'Tim'
}

// this is an action that simply tells us to increase the number;
var incNumberAction = {
  type: 'INCREMENT_NUMBER'
}

var decNumberAction = {
  type: 'DECREMENT_NUMBER'
}

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        number: state.number,
        name: action.payload
      }
    case 'INCREMENT_NUMBER':
      return {
      name: state.name,
      number: state.number + 1
    }
   case 'DECREMENT_NUMBER':
     return { 
       name: state.name,
       number: state.number - 1
    }
  }
}


// 'CHANGE_NAME': case
// var newState = reducer(state, action);
// console.log(newState);
// { number 7, name; 'Tim' }


// 'INCREMENT_NUMBER': case
// var newState = reducer(state, incNumberAction);
// console.log(newState);
// { number 8, name; 'Joh' }


// // case 'DECREMENT_NUMBER': 
var newState = reducer(state, decNumberAction);
console.log(newState);
// // { number 6, name; 'Joh' }


// So we get our old/intial state number 7 which is the part of our state that hasnt changed and 
// the new state name 'Tim' - this is what our action.payload value was;

// we can now add more cases, our name stays the same all we are changing is incresing and decresing our number - this will make up the newState;

// so we can now add more actions based on our cases;

// The reducer is a pure function and acts based on what action its given and what payload its given,
// it will always return the old/ initalState(object) - (passed in the state) and the new state(object) passed in the payload without altering the old/initalState;

// The reducer is a pure function - it'll always have the same out come based on what the state and what action is passed/ given to it. It depends on the action given to it; The action doesent know the whole state of the App, it simply knows what the type of the action is so it makes the changes based on that. thus we increment or decrement the number or changing the name; and at times it might have the payload; but it doesent have to have the payload; it depends; the important thing is the new state it returns is not going to be the same as the old state; which means it did not mutate our object; thus making it a pure function;
// console.log(newState !== state);
// true