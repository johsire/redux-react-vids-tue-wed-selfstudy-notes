import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddtoList from './AddtoList'


class App extends Component {
  // We can now get rid of our initial state since the store is managing the state now;

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     chores: [
  //       'Dishes',
  //       'Laundry',
  //       'Vaccum'
  //     ]
  //   }
  // }

render() {
  return (
    <div className="App">
      // this.state.chores will changed once the store is keep track of our state to this.props.chores; this is what displays the data on the screen;
      <list title="Chores" items={this.props.chores} />
      <AddtoDoList />

    </div>
  )
 }
}

// it tells the store what specific parts it needs to be notified of when a change occurs so they can update state accordingly and re-render; 
// this is how the App component subscribes to the store
// this func and Provider make it possible to render new state;
function mapStateToProps(state) {
  return {
    chores: state.chores
  }
}

// we connect and invok both functions;
export default connect(mapStateToProps)(App);
