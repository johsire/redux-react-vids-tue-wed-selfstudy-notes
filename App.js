import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chores: [
        'Dishes',
        'Laundry',
        'Vaccum'
      ]
    }
  }

render() {
  return (
    <div className="App">

      <list title="Chores" items={this.state.chores} />
      <AddtoDoList />

    </div>
  )
 }
}

// it tells the store what parts it needs to be notified of when a change occurs so they can update state accordingly and re-render;
// this is how the App component subscribes to the store
// this func and Provider make it possible to render new state;
function mapStateToProps(state) {
  return {
    chores: state.chores
  }
}

// we connect and invok both functions;
export default connect(mapStateToProps)(App);
