import React, { Component } from 'react';

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
    // alert(this.state.newItem);
    // When the button is clicked, this method/ func dispatches the action to the reducer for it to figure it out
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

export default AddtoList;
