import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

// connect helps us subscribe to the store for changes
// and also dispatch actions to the store;
import {connect} from 'react-redux';
import reducer from '../ducks/chores';


class AddtoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  handleClick() {
    // When the button is clicked, this method/ func dispatches the action to the reducer for it to figure it out how the state should change and returns the new state;
    // Then Provider and connect notifies any Component that needs to be notified/ that is subscribed to the store, so it can update the new state and re-render;

    // we incok dispatch & pass in an object;
    this.props.dispatch(
      {
        // the type has to match the const string in our reducer exactly because;
        // the reducer uses it - the action.type & whatever the string is to figure out what case to fire;
        // we also need a payload - this is the new items being added and they're stored in this.state.newItem in our case
        type: 'chores/ADD_CHORE',
        payload: this.state.newItem
      }
    )
  };


render() {
  return (
    <div>
      <input onChange={this.handleChange} />
      <button onClick={this.handleClick}>Add Item</button>
    </div>
  )
 }
} 

// helps us subscribe to the store to receive updates of new state; but when you dont pass any parameters, 
// our AddtoList will not be notified of any changes of new state; we'll need to create the mapStateToProps and 
// pass it as a parameter for us to be subscribed to the store;

// connect makes dispatch function available witch connects us directly to the reducer 
// so when you invok dispatch and pass in an action; that action gets sent straight to the reducer;
export default connect()(AddtoList);
